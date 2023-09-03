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
      const {
        data: {
          data: { result },
        },
      } = await instance.get(`/boards/${id}`);
      return result;
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
  async ({ _id, title, icon, background }, { rejectWithValue }) => {
    try {
      const {
        data: {
          data: { result },
        },
      } = await instance.put(`/boards/${_id}`, { title, icon, background });
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
