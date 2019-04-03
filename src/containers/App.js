import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import './css/util.css';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Register from './Register';
import Footer from '../components/footer';

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
          <div>
            <SignIn onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>
            <Footer/>
          </div>
        );
      break;
      case 'home':
        return (
          <div>
            <HomePage onRouteChange={this.onRouteChange} user={this.state.user} updateUser={this.updateUser}/>
            <Footer/>
          </div>
        );
      break;
      case 'register':
        return (
          <div>
            <Register onRouteChange={this.onRouteChange}/>
            <Footer/>
          </div>
        );
      break;
      default:
        return (
          <div>
            <SignIn onRouteChange={this.onRouteChange}/>
            <Footer/>
          </div>
        );
    }    
  }
}

export default App;
