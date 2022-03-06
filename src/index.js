import React from 'react';
import { render } from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

import './assets/style/main.css';
import './assets/style/loader.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
