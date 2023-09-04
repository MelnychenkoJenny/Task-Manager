// import axios from 'axios';
import instance from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://taskpro-backend-jo75.onrender.com';

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
      // console.log('ot beckenda otvet', data);
      return data;
    } catch (error) {
      // console.log('error333 :>> ', error);
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
  async (data, { rejectWithValue }) => {
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
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
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
      console.log(dataColumn, 'datacolumn');
      const {
        data: { result },
      } = await instance.post('/columns', dataColumn);
      thunkAPI.dispatch(getBoardById(dataColumn.board));
      console.log(111, result);
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
      console.log('columnId', columnId);
      const {
        data: { result },
      } = await instance.delete(`/columns/${columnId}`);

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
