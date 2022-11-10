import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

ReactDOM.render(  
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


