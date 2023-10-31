import instance from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllBoards = createAsyncThunk(
  'boards/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { result },
      } = await instance.get('/boards');

      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getBoardById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/boards/${id}`);
      console.log('data boardId', data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoards = createAsyncThunk(
  'boards/addBoards',
  async (board, { rejectWithValue }) => {
    try {
      const {
        data: {
          data: { result },
        },
      } = await instance.post('/boards', board);

      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async (data, thunkAPI) => {
    try {
      const {
        data: {
          data: { result },
        },
      } = await instance.put(`/boards/${data.id}`, {
        title: data.title,
        icon: data.icon,
        background: data.background,
      });
      thunkAPI.dispatch(getBoardById(data.id));
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoards = createAsyncThunk(
  'boards/deleteBoards',
  async (boardId, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await instance.delete(`/boards/${boardId}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'boards/addColumn',
  async (dataColumn, thunkAPI) => {
    try {
      const {
        data: { result },
      } = await instance.post('/columns', dataColumn);
      thunkAPI.dispatch(getBoardById(dataColumn.board));
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'boards/editColumn',
  async ({ idColumn, title }, { rejectWithValue }) => {
    try {
      const {
        data: { result },
      } = await instance.put(`/columns/${idColumn}`, { title });
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'boards/deleteColumn',
  async (columnId, { rejectWithValue }) => {
    try {
      const {
        data: { result },
      } = await instance.delete(`/columns/${columnId}`);

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTasks = createAsyncThunk(
  'boards/addTasks',
  async (
    { boardId, deadLine, description, priority, taskOwner, title },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.post('/tasks', {
        deadLine,
        description,
        priority,
        taskOwner,
        title,
      });
      thunkAPI.dispatch(getBoardById(boardId));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTasks = createAsyncThunk(
  'boards/updateTasks',
  async (
    { deadLine, description, priority, taskOwner, title, idTask, boardId },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.patch(`/tasks/${idTask}`, {
        title,
        description,
        priority,
        deadLine,
        taskOwner,
      });
      thunkAPI.dispatch(getBoardById(boardId));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  'boards/deleteTasks',
  async ({ id, boardName }, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/tasks/${id}`);
      thunkAPI.dispatch(getBoardById(boardName));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
