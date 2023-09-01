import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://taskpro-backend-jo75.onrender.com',
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401 && !error.config._retry) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        token.set(data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const userRegistration = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', credentials);

      // console.log('data registration', res);
      // console.log('token registration', data.token);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.request.status);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    console.log('credential', credentials);
    try {
      const { data } = await instance.post('/users/signin', credentials);
      console.log('data login', data);
      // console.log('token login', data.token)
      localStorage.setItem('refreshToken', data.refreshToken);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(222, error.request.status);
      console.log(111, error);
      return rejectWithValue(error.request.status);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'auth/updateTheme',
  async (theme, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('/users/themes', { theme });
      console.log('rez', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/users/update`, formData);
      console.log('update data bek', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signout');
      console.log(data, 555);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue('No valid token');
    }
    token.set(persistedToken);
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export default instance;
