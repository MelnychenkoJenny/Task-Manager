import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';  // dnd
import { HTML5Backend } from 'react-dnd-html5-backend' // dnd
import Context from '../src/components/Context/Context';
import { App } from 'components/App';
import Loader from 'components/Loader/Loader';

import 'styles/index.module.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter basename="Task-Manager">
          <DndProvider backend={HTML5Backend}>  
            <Context>
              <App />
            </Context>
          </DndProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
