import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/Home';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginForm from './LoginForm/LoginForm';
import './App.css';
import '../css/Login.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='app-container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginForm} />
            <Route path='/signup' component={SignUpForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
