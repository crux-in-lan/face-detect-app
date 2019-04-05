import React, {Component} from 'react';
import FaceDetect from './faceDetect';
import Rank from '../components/Rank';
import SignOut from '../components/SignOut';
import Logo from '../components/Logo';
import './css/HomePage.scss';
// import './css/main.css';
import FaceImage from './FaceImage';
import FaceInput from './FaceInput';

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imageURL: 'http://nebivalici.com/img_tmp/img-01.png',
			boundingBox : {
				top: undefined,
				right: undefined,
				bottom: undefined,
				left: undefined
			}
		}
	}

	onUrlChange = (event) => {
		this.setState({imageURL: event.target.value});
	}

	calculateBoundingBoxPositions = (objPositions) => {
		const image = document.getElementById('imgFace');
		const width = image.width;
		const height = image.height;
		const {bottom_row, left_col, top_row, right_col} = objPositions;
		const bottom = height * (1 - bottom_row); //bottom_row
		const left = width * left_col; //left_col
		const top = height * top_row; //top_row
		const right = width * (1 - right_col); //right_col

		this.setState({boundingBox: {top,right,bottom,left}},() => {
			const bBox = document.getElementsByClassName("boundingBox")[0];
  			bBox.classList.add("active");
			// console.log(this.state.boundingBox);
		});
	}

	render() {
		return (
			// {
	  //     <div className="grid-container">	             
	  //           <div className="logo"><Logo/></div>	         	 
	  //           <div className="rank"><Rank username={this.props.user.username} detections={this.props.user.detections}/></div>
	  //           <div className="signout"><SignOut onRouteChange={this.props.onRouteChange}/></div>
	  //           <div className="faceDetect"><FaceDetect updateUser={this.props.updateUser} detections={this.props.user.detections} userId={this.props.user.id}/></div>
	  //     </div>
	  // 		}
	  <div className='homepage'>
			<div className="login100-pic js-tilt">
				<FaceImage imageURL={this.state.imageURL} boundingBox={this.state.boundingBox}/>
			</div>

			<div className="login100-form">
				<span className="login100-form-title">
					<Rank username={this.props.user.username} detections={this.props.user.detections}/>
					<FaceInput onUrlChange={this.onUrlChange} updateUser={this.props.updateUser} userId={this.props.user.id} calculateBoundingBoxPositions={this.calculateBoundingBoxPositions}/>
				</span>	
				{			
					// <FaceDetect updateUser={this.props.updateUser} userId={this.props.user.id}/>				

				}
				<div className="text-center p-t-136">
					<a className="txt2">
						<SignOut onRouteChange={this.props.onRouteChange}/>
						<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	    );
	}
}

export default HomePage;