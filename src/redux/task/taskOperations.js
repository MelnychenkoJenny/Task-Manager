// 💙💛 Kostiantyn Koshyk
import axios from 'axios';
import instance from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskpro-backend-jo75.onrender.com';

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await instance.post('/tasks', task);

      // console.log('dataAdd :>> ', data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tasks/${columnId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, title, description, priority, deadLine }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/tasks/${taskId}`, {
        title,
        description,
        priority,
        deadLine,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/tasks/${taskId}`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
