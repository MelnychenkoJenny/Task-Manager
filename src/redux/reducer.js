import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import { boardsReducer } from './board/boardSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };
  
  const boardPersistConfig = {
    key: 'boards',
    storage,
  };

export const reducer = {
    auth: persistReducer(authPersistConfig, authReducer),
    boards: persistReducer(boardPersistConfig, boardsReducer),
  }