import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import App from './javascript/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
