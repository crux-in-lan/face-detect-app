import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Register from './Register';

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'signin'
    }
  }

  render() {
    const {route} = this.state;
    switch(route) {
      case 'signin':
        return (
          <SignIn/>
        );
      break;
      case 'home':
        return (
          <HomePage/>
        );
      break;
      case 'register':
        return (
          <Register/>
        );
      break;
      default:
        return (
          <SignIn/>
        );
    }    
  }
}

export default App;
