import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import FaceDetect from '../components/faceDetect';
import Rank from '../components/Rank';
import SignOut from '../components/SignOut';
import Logo from '../components/Logo';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
            <div className="logo"><Logo/></div>
            <div className="rank"><Rank/></div>
            <div className="signout"><SignOut/></div>
            <div className="faceDetect"><FaceDetect/></div>
      </div>
    );
  }
}

export default App;
