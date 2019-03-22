import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './components/app';
import RegistrationForm from './components/Registration';
import LoginForm from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const rootEl = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
    <Route path="/registration" component={RegistrationForm}/>
    <Route path="/login" component={LoginForm}/>
  </Router>,
  rootEl);


