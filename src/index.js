import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { GeneralRoutes } from './components/router/GeneralRoutes';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={ store }>
          <GeneralRoutes />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  //</React.StrictMode>
);