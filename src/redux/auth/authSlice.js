import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  getIsFetchAnswer: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.userRegistration.pending](state, action) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.userRegistration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.getIsFetchAnswer = false;
    },
    [authOperations.userRegistration.rejected](state, action) {
      state.isLoggedIn = false;
      state.getIsFetchAnswer = false;
    },
    //
    [authOperations.userLogin.pending](state, action) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.getIsFetchAnswer = false;
    },
    [authOperations.userLogin.rejected](state) {
      state.isLoggedIn = false;
      state.getIsFetchAnswer = false;
    },
    //
    [authOperations.logout.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.getIsFetchAnswer = false;
    },
    [authOperations.logout.rejected](state) {
      state.getIsFetchAnswer = false;
    },
    //
    [authOperations.checkAuth.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.checkAuth.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.getIsFetchAnswer = false;
    },
    [authOperations.checkAuth.rejected](state) {
      state.getIsFetchAnswer = false;
    },
  },
});

export default authSlice.reducer;
