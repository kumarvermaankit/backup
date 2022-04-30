import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import AppProviders from './AppProviders';
import './index.css';

const Router: any =
  process.env.REACT_APP_HOST_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Switch>
        <AppProviders>
          <App />
        </AppProviders>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
