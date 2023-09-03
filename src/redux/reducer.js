import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import { boardsReducer } from './board/boardSlice';
import { columnsReducer } from './column/columnSlice';
import { tasksReducer } from './task/taskSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const boardPersistConfig = {
  key: 'boards',
  storage,
};

export const reducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  boards: persistReducer(boardPersistConfig, boardsReducer),
  columns: columnsReducer,
  tasks: tasksReducer,
};
