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
      route: 'signin',
      user: {     
        username: '',
        email: '',
        detections: ''      
      }
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({route:newRoute});
  }

  updateUser = (userInfo) => {
    this.setState({user:{...this.state.user,...userInfo}});
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const {route} = this.state;
    switch(route) {
      case 'signin':
        return (
          <SignIn onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>
        );
      break;
      case 'home':
        return (
          <HomePage onRouteChange={this.onRouteChange} user={this.state.user} updateUser={this.updateUser}/>
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
