import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardById,
  addBoards,
  updateBoard,
  deleteBoards,
} from './boardOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = payload;
};

const handleFulfilledAddBoard = (state, { payload }) => {
  console.log(state.allBoards);
  state.isLoading = false;
  state.error = null;
  state.allBoards = [payload, ...state.allBoards];
  // state.allBoards.push(payload);
};

const handleFulfilledgetBoardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.boardById = payload;

  // state.columns = action.payload.columns;
  // state.bgrURL = action.payload.bgrURL;
};

const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.boardById = payload;
  const index = state.allBoards.findIndex(board => board._id === payload._id);
  state.allBoards.splice(index, 1, payload);
};

const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.allBoards.findIndex(board => board._id === payload._id);

  state.allBoards.splice(index, 1);
  state.boardById = {
    _id: '',
    title: '',
    icon: '',
    background: '',
    owner: '',
    columnOrder: [],
  };
  state.columns = [];
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const boardsInitialState = {
  allBoards: [],
  boardById: {},
  columns: [], //в середині буде масив із тасками
  isLoading: false,
  error: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllBoards.fulfilled, handleFulfilled)
      .addCase(getBoardById.fulfilled, handleFulfilledgetBoardById)
      .addCase(addBoards.fulfilled, handleFulfilledAddBoard)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdateBoard)
      .addCase(deleteBoards.fulfilled, handleFulfilledDeleteBoard)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export const boardsReducer = boardsSlice.reducer;
