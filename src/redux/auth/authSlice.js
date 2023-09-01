// import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './authOperations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   getIsFetchAnswer: false,
// };
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [authOperations.userRegistration.pending](state, action) {
//       state.getIsFetchAnswer = true;
//     },
//     [authOperations.userRegistration.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.getIsFetchAnswer = false;
//     },
//     [authOperations.userRegistration.rejected](state, action) {
//       state.isLoggedIn = false;
//       state.getIsFetchAnswer = false;
//     },
//     //
//     [authOperations.userLogin.pending](state, action) {
//       state.getIsFetchAnswer = true;
//     },
//     [authOperations.userLogin.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.getIsFetchAnswer = false;
//     },
//     [authOperations.userLogin.rejected](state) {
//       state.isLoggedIn = false;
//       state.getIsFetchAnswer = false;
//     },
//     //
//     [authOperations.logout.pending](state) {
//       state.getIsFetchAnswer = true;
//     },
//     [authOperations.logout.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.getIsFetchAnswer = false;
//     },
//     [authOperations.logout.rejected](state) {
//       state.getIsFetchAnswer = false;
//     },
//     //
//     [authOperations.checkAuth.pending](state) {
//       state.getIsFetchAnswer = true;
//     },
//     [authOperations.checkAuth.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.getIsFetchAnswer = false;
//     },
//     [authOperations.checkAuth.rejected](state) {
//       state.getIsFetchAnswer = false;
//     },
//   },
// });

// export default authSlice.reducer;

// Варіант з builder
import { createSlice } from '@reduxjs/toolkit';
import {userRegistration, userLogin, logout, refreshUser, updateTheme, updateUserProfile} from 'redux/auth/authOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handlePendingRefresh = state => {
  state.isLoading = true;
  state.getIsFetchAnswer = true;
};
const handleAuthorisationFulfilled = (state, action) => {
  console.log('payload454', action);
  state.user = action.payload;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleLoginFulfilled = (state, {payload}) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.user = payload;
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
}

const handleRejectedAuthorisation = (state, { payload }) => {
  console.log('error', payload)
  state.error = payload;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
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
  // const {name, email, avatarURL, theme} = payload
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
  extraReducers: builder =>
    builder
      .addCase(
        userRegistration.fulfilled,
        handleAuthorisationFulfilled
      )
      .addCase(userLogin.fulfilled, handleLoginFulfilled)
      .addCase(logout.fulfilled, handleFulfilledLogout)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addCase(updateTheme.fulfilled, handleFulfilledUpdateTheme)
      .addCase(
        updateUserProfile.fulfilled,
        handleFulfilledUpdateUserProfile
      )
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        handleRejectedAuthorisation
      ),
});

export default authSlice.reducer;
// export const authReducer = authSlice.reducer;
