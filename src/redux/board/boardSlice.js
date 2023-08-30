import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards, addBoards, deleteBoards } from './boardOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = payload;
};

const handleFulfilledAddBoard = (state, {payload}) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards= [payload, ...state.allBoards];
  // state.allBoards.push(payload);
};

const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.allBoards.findIndex(board => board._id === payload._id);

  state.allBoards.splice(index, 1);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const boardsInitialState = {
  allBoards: [],
  boardById: {},
  isLoading: false,
  error: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllBoards.fulfilled, handleFulfilled)
      .addCase(addBoards.fulfilled, handleFulfilledAddBoard)
      .addCase(deleteBoards.fulfilled, handleFulfilledDeleteBoard)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export const boardsReducer = boardsSlice.reducer;
