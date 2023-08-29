import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskpro-backend-jo75.onrender.com';

export const getAllBoards = createAsyncThunk(
  'boards/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/boards');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addBoards = createAsyncThunk(
  'boards/addBoards',
  async (board, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/boards', board);
      console.log('Add new board success')
      return data.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteBoards = createAsyncThunk(
  'boards/deleteBoards',
  async (boardId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/boards/${boardId}`);
      console.log('Delete board success')
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
