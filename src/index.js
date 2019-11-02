import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'normalize.css';
import config from './config';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// pings the server every 5 minutes
setInterval(() => fetch(`${config.API_ENDPOINT}`), 5 * 60 * 1000);
