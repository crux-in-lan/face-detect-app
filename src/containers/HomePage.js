import React, {Component} from 'react';
import FaceDetect from '../components/faceDetect';
import Rank from '../components/Rank';
import SignOut from '../components/SignOut';
import Logo from '../components/Logo';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
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

export default HomePage;