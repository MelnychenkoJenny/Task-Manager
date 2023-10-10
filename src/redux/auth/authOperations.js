import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from 'redux/store';
import { setToken, setRefreshToken } from './authSlice';

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
    if (error.response.status === 401) {
      const refreshToken = store.getState().auth.refreshToken;
      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        token.set(data.token);
        store.dispatch(setToken(data.token));
        store.dispatch(setRefreshToken(data.refreshToken));
        error.config.headers.Authorization = `Bearer ${data.token}`;
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    } else if (error.response.status === 500 || error.response.status === 400) {
    }
    return Promise.reject(error);
  }
);

export const userRegistration = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', credentials);

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signin', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'auth/updateTheme',
  async (theme, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('/users/themes', { theme });
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
export const needHelp = createAsyncThunk(
  'auth/help',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/help`, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default instance;
