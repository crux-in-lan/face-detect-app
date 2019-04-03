import React, {Component} from 'react';
import FaceDetect from './faceDetect';
import Rank from '../components/Rank';
import SignOut from '../components/SignOut';
import Logo from '../components/Logo';
import './HomePage.css';
// import './css/main.css';

class HomePage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
	      <div className="grid-container">	             
	            <div className="logo"><Logo/></div>	         	 
	            <div className="rank"><Rank username={this.props.user.username} detections={this.props.user.detections}/></div>
	            <div className="signout"><SignOut onRouteChange={this.props.onRouteChange}/></div>
	            <div className="faceDetect"><FaceDetect updateUser={this.props.updateUser} detections={this.props.user.detections} userId={this.props.user.id}/></div>
	      </div>
	    );
	}
}

export default HomePage;