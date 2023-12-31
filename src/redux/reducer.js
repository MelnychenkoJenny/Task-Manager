import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { boardsReducer } from './board/boardSlice';
import { filterReducer } from './filter/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const boardPersistConfig = {
  key: 'boards',
  storage,
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  boards: persistReducer(boardPersistConfig, boardsReducer),
  filter: filterReducer,
});
