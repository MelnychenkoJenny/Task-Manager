// 💙💛 Kostiantyn Koshyk
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskpro-backend-jo75.onrender.com';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (column, thunkAPI) => {
    try {
      const { data } = await axios.post('/columns', column);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getColumns = createAsyncThunk(
  'columns/getColumns',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/columns/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Исправляется ошибка на бэкенд
export const getColumnById = createAsyncThunk(
  'columns/getColumnById',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/columns/${columnId}`);

      // console.log('dataGetColumnById :>> ', data);

      return data;
      // return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addColumns = createAsyncThunk(
//   'columns/addColumns',
//   async (column, { rejectWithValue }) => {
//     try {
//       const {
//         data: {
//           data: { result },
//         },
//       } = await axios.post('/columns/', column);

//       return result;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ id, title }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/columns/${id}`, { title });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/columns/${columnId}`);
      console.log('dataDeleteColumn :>> ', data);

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
