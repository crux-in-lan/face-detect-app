import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/util.css';
import './App.css';
import HomePage from './HomePage';
import Register from './Register';
import Footer from '../components/footer';
import PageFrame from '../components/PageFrame';
import LoginFrame from '../components/LoginFrame';
import RegisterFrame from '../components/RegisterFrame';
import FooterFrame from '../components/FooterFrame';
import SignIn from './SignIn';
import HomeFrame from '../components/HomeFrame';

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'home',
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
          <PageFrame>
            <LoginFrame>              
                <SignIn onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>  
            </LoginFrame>
            <FooterFrame>
                <Footer/>              
            </FooterFrame>
          </PageFrame>
        );
      break;
      case 'home':
        return (
          <PageFrame>
            <HomeFrame>              
              <HomePage onRouteChange={this.onRouteChange} user={this.state.user} updateUser={this.updateUser}/>
            </HomeFrame>
            <FooterFrame>
              <Footer/>
            </FooterFrame>
          </PageFrame>
        );
      break;
      case 'register':
        return (
          <PageFrame>
            <RegisterFrame>
              <Register onRouteChange={this.onRouteChange}/>
            </RegisterFrame>
            <FooterFrame>
              <Footer/>
            </FooterFrame>
          </PageFrame>
        );
      break;
      default:
        return (
          <PageFrame>
            <LoginFrame>
              <SignIn onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>
            </LoginFrame>
            <FooterFrame>
              <Footer/>
            </FooterFrame>
          </PageFrame>
        );
        break;
    }    
  }
}

export default App;
