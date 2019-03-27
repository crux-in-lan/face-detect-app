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

  onRouteChange = (newRoute) => {
    this.setState({route:newRoute});
  }

  render() {
    const {route} = this.state;
    switch(route) {
      case 'signin':
        return (
          <SignIn onRouteChange={this.onRouteChange}/>
        );
      break;
      case 'home':
        return (
          <HomePage/>
        );
      break;
      case 'register':
        return (
          <Register onRouteChange={this.onRouteChange}/>
        );
      break;
      default:
        return (
          <SignIn onRouteChange={this.onRouteChange}/>
        );
    }    
  }
}

export default App;
