import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './assets/javascript/App';
import * as serviceWorker from './serviceWorker';
import './assets/stylesheets/index.css';
import './assets/stylesheets/App.css';
import './assets/stylesheets/navbar.css';
import "./assets/stylesheets/burger.css";
import "./assets/stylesheets/feed.css";


ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
