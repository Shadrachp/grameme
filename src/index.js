import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './assets/javascript/App';
import * as serviceWorker from './serviceWorker';
import './assets/stylesheets/index.scss';
import './assets/stylesheets/App.scss';
import './assets/stylesheets/navbar.scss';
import "./assets/stylesheets/burger.scss";
import "./assets/stylesheets/feed.scss";
import "./assets/stylesheets/extras.scss";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
