import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardById,
  addBoards,
  updateBoard,
  deleteBoards,
  addColumn,
  editColumn,
  deleteColumn,
  addTasks,
  updateTasks,
  deleteTasks,
} from './boardOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = payload;
  state.allBoards.reverse();
};

const handleFulfilledAddBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = [payload, ...state.allBoards];
  // state.allBoards.push(payload);
};

const handleFulfilledgetBoardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.boardById = payload.result;
  state.boardById.columns = payload.columns;
};

const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.boardById.icon = payload.icon;
  state.boardById.backgtound = payload.background;
  state.boardById.title = payload.title;
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
};

const handleFulfilledAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.boardById.columnOrder.push(payload._id);
  const boardIndex = state.allBoards.findIndex(
    ({ _id }) => _id === payload.board
  );
  state.allBoards[boardIndex].columnOrder.push(payload._id);
};

const handleFulfilledEditColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  const index = state.boardById.columns.findIndex(
    column => column._id === payload._id
  );

  const newColumn = {
    ...state.boardById.columns[index],
    title: payload.title,
  };
  state.boardById.columns.splice(index, 1, newColumn);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const columnIndexToDelete = state.boardById.columns.findIndex(
    column => column._id === payload._id
  );
  state.boardById.columns.splice(columnIndexToDelete, 1);
};

const handleFulfilledAddTasks = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledUpdateTasks = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledDeleteTasks = (state, action) => {
  state.isLoading = false;
  state.error = null;
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
      .addCase(getBoardById.fulfilled, handleFulfilledgetBoardById)
      .addCase(addBoards.fulfilled, handleFulfilledAddBoard)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdateBoard)
      .addCase(deleteBoards.fulfilled, handleFulfilledDeleteBoard)
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(editColumn.fulfilled, handleFulfilledEditColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(addTasks.fulfilled, handleFulfilledAddTasks)
      .addCase(updateTasks.fulfilled, handleFulfilledUpdateTasks)
      .addCase(deleteTasks.fulfilled, handleFulfilledDeleteTasks)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export const boardsReducer = boardsSlice.reducer;
