import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://taskpro-backend-jo75.onrender.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const userRegistration = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signin', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signout', credentials);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const checkAuth = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkApi.rejectWithValue('No valid token');
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
const authOperations = {
  userRegistration,
  userLogin,
  logout,
  checkAuth,
};
export default authOperations;
