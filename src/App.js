/*libraries and APIs*/
import React, { Component } from 'react';

/*common for the whole application*/
import logo from './logo.svg';
// import './css/util.css';
import './App.css';

/*homepage*/
import PageFrameHome from './home/comPageFrameHome/PageFrameHome';
import HomeFrame from './home/comPageFrameHome/comHomeFrame/HomeFrame';
import HomePage from './home/comPageFrameHome/comHomeFrame/conHomePage/HomePage';
import FooterFrameHome from './home/comPageFrameHome/comFooterFrameHome/FooterFrameHome';
import FooterHome from './home/comPageFrameHome/comFooterFrameHome/comFooterHome/FooterHome';

/*signin page*/
import PageFrameSignIn from './signin/comPageFrameSignIn/PageFrameSignIn';
import SignInFrame from './signin/comPageFrameSignIn/comSignInFrame/SignInFrame';
import SignInPage from './signin/comPageFrameSignIn/comSignInFrame/conSignInPage/SignInPage';
import FooterFrameSignIn from './signin/comPageFrameSignIn/comFooterFrameSignIn/FooterFrameSignIn';
import FooterSignIn from './signin/comPageFrameSignIn/comFooterFrameSignIn/comFooterSignIn/FooterSignIn';

/*register page*/
import PageFrameRegister from './register/comPageFrameRegister/PageFrameRegister';
import RegisterFrame from './register/comPageFrameRegister/comRegisterFrame/RegisterFrame';
import RegisterPage from './register/comPageFrameRegister/comRegisterFrame/conRegisterPage/RegisterPage';
import FooterFrameRegister from './register/comPageFrameRegister/comFooterFrameRegister/FooterFrameRegister';
import FooterRegister from './register/comPageFrameRegister/comFooterFrameRegister/comFooterRegister/FooterRegister';

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'singin',
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
          <PageFrameSignIn>
             
            <SignInFrame> 
              <SignInPage onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>                           
            </SignInFrame>            
            
            <FooterFrameSignIn>              
              <FooterSignIn/>                            
            </FooterFrameSignIn>
            
          </PageFrameSignIn>
        );
      break;
      case 'home':
        return (
          <PageFrameHome>
            
            <HomeFrame>              
              <HomePage onRouteChange={this.onRouteChange} user={this.state.user} updateUser={this.updateUser}/>
            </HomeFrame>
            
            <FooterFrameHome>
              <FooterHome/>
            </FooterFrameHome>
            
          </PageFrameHome>
        );
      break;
      case 'register':
        return (
          <PageFrameRegister>

            <RegisterFrame>              
              <RegisterPage onRouteChange={this.onRouteChange}/>              
            </RegisterFrame>
            
            <FooterFrameRegister>
              <FooterRegister/>
            </FooterFrameRegister>
            
          </PageFrameRegister>
        );
      break;
      default:
        return (
          <PageFrameSignIn>

            <SignInFrame>              
              <SignInPage onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>  
            </SignInFrame>

            <FooterFrameSignIn>
              <FooterSignIn/>              
            </FooterFrameSignIn>

          </PageFrameSignIn>
        );
        break;
    }    
  }
}

export default App;