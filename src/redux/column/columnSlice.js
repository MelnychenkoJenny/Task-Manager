import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  getColumnById,
  getColumns,
  updateColumn,
} from './columnOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allColumns = payload;
  // console.log('object :>> ', payload);
};

const onAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allColumns = [payload, ...state.allColumns];
};

const onGetColumnById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.columnById = payload;
};

const handleFulfilledUpdateColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.columnById = payload;
  const index = state.allColumns.findIndex(el => el._id === payload._id);
  state.allColumns.splice(index, 1, payload);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.allColumns.findIndex(el => el._id === payload._id);

  state.allColumns.splice(index, 1);
  state.columnById = {
    _id: '',
    title: '',
    owner: '',
    taskOrder: [],
  };
  state.tasks = [];
};

const handleRejected = (state, { payload }) => {
  console.log(state.error);
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  allColumns: [],
  columnById: {},
  tasks: [],
  isLoading: false,
  error: null,
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getColumns.fulfilled, handleFulfilled)
      .addCase(getColumnById.fulfilled, onGetColumnById)
      .addCase(addColumn.fulfilled, onAddColumn)
      .addCase(updateColumn.fulfilled, handleFulfilledUpdateColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export const columnsReducer = columnsSlice.reducer;
