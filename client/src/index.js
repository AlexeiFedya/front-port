import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundry from './components/error-boundry/error-boundry'
import App from './components/app/App';
import './styles/index.scss';


ReactDOM.render(
  <ErrorBoundry>
    <Router>
      <App/>
    </Router>
  </ErrorBoundry>,
  document.getElementById('root')
);

