// 💙💛 Kostiantyn Koshyk
import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, getTasks, updateTask } from './taskOperations';

const onPending = state => {
  state.isLoading = true;
};

const onFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allTasks = payload;
};

const onAddTask = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allTasks = [payload, ...state.allTasks];
};

const onUpdateTask = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.taskById = payload;
  const index = state.allTasks.findIndex(el => el._id === payload._id);
  state.allTasks.splice(index, 1, payload);
};

const onDeleteTask = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.allTasks.findIndex(el => el._id === payload._id);
  state.allTasks.splice(index, 1);
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  allTasks: [],
  taskById: {},
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTasks.fulfilled, onFulfilled)
      .addCase(addTask.fulfilled, onAddTask)
      .addCase(updateTask.fulfilled, onUpdateTask)
      .addCase(deleteTask.fulfilled, onDeleteTask)
      .addMatcher(action => action.type.endsWith('/pending'), onPending)
      .addMatcher(action => action.type.endsWith('/rejected'), onRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
