import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogin,
  logout,
  refreshUser,
  updateTheme,
  updateUserProfile,
} from 'redux/auth/authOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handlePendingRefresh = state => {
  state.isLoading = true;
  state.getIsFetchAnswer = true;
};
const handleAuthorisationFulfilled = (state, { payload }) => {
  console.log('payload454', payload);
  // console.log('state registration', state.user)
  state.user = payload;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleLoginFulfilled = (state, { payload }) => {
  // console.log('login payload',payload)
  // console.log('state login', state.user)
  const { name, email, avatarURL, theme } = payload;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.user = { ...state.user, name, email, avatarURL, theme };
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
};

const handleRejectedAuthorisation = (state, { payload }) => {
  console.log('error', payload);
  state.error = payload;
  state.loading = false;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null, avatarURL: '', theme: 'light' };
  state.token = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
};
const handleFulfilledRefresh = (state, {payload}) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.getIsFetchAnswer = false;
};
const handleRejectedRefresh = state => {
  state.getIsFetchAnswer = false;
};

const handleFulfilledUpdateTheme = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};

const handleFulfilledUpdateUserProfile = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};

const initialState = {
  user: { name: null, email: null, avatarURL: '', theme: 'light' },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  getIsFetchAnswer: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
 /* reducers: {
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },*/
  extraReducers: builder =>
    builder
      .addCase(userRegistration.fulfilled, handleAuthorisationFulfilled)
      .addCase(userLogin.fulfilled, handleLoginFulfilled)
      .addCase(logout.fulfilled, handleFulfilledLogout)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addCase(updateTheme.fulfilled, handleFulfilledUpdateTheme)
      .addCase(updateUserProfile.fulfilled, handleFulfilledUpdateUserProfile)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        handleRejectedAuthorisation
      ),
});

// export const { setRefreshToken, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
