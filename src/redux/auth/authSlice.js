import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogin,
  logout,
  refreshUser,
  updateTheme,
  updateUserProfile,
  needHelp,
} from 'redux/auth/authOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handlePendingRefresh = state => {
  state.isLoading = true;
  state.getIsFetchAnswer = true;
};
const handleAuthorisationFulfilled = (state, { payload }) => {
  state.user = payload;
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const handleLoginFulfilled = (state, { payload }) => {
  const { name, email, avatarURL, theme } = payload;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.user = { name, email, avatarURL, theme };
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  state.error = null;
};

const handleRejectedAuthorisation = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null, avatarURL: '', theme: 'light' };
  state.token = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
};
const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.getIsFetchAnswer = false;
};
const handleRejectedRefresh = state => {
  state.getIsFetchAnswer = false;
  state.isLoggedIn = false;
  state.token = null;
};

const handleFulfilledUpdateTheme = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};

const handleFulfilledUpdateUserProfile = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};

const handleFulfilledNeedHelp = (state, { payload }) => {
  state.needHelpMessage = payload.message;
};
const handleRejectedNeedHelp = (state, { payload }) => {
  state.needHelpMessage = payload;
};

const initialState = {
  user: { name: null, email: null, avatarURL: '', theme: 'light' },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  getIsFetchAnswer: false,
  error: null,
  isLoading: false,
  needHelpMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
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
      .addCase(needHelp.fulfilled, handleFulfilledNeedHelp)
      .addCase(needHelp.rejected, handleRejectedNeedHelp)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        handleRejectedAuthorisation
      ),
});

// export default authSlice.reducer;
export const { setRefreshToken, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
