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
