// basename="/Task-Manager"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'styles/index.module.scss';
import {
  store,
  persistor
} from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Загрузка</div>} persistor={persistor}>
      <BrowserRouter basename="Task-Manager">
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
