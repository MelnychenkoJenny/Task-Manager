import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards } from './boardOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const boardsInitialState = {
  allBoards: [],
  isLoading: false,
  error: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllBoards.fulfilled, handleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export const boardsReducer = boardsSlice.reducer;
