import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { initServiceWorker } from './modules/helpers';

const appElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appElement,
);

initServiceWorker();
