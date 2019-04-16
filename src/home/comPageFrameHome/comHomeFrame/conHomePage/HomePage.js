import React, {Component} from 'react';
import './font/font-awesome-4.7.0/css/font-awesome.min.css';
import Rank from './comRank/Rank';
import SignOut from './comSignOut/SignOut';
import './css/HomePage.scss';
import FaceImage from './comFaceImage/FaceImage';
import FaceInput from './comFaceInput/FaceInput';

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
	  <div className='homepage'>
			<div className="login100-pic js-tilt">
				<FaceImage imageURL={this.state.imageURL} boundingBox={this.state.boundingBox}/>
			</div>

			<div className="login100-form">
				<span className="login100-form-title">
					<Rank username={this.props.user.username} detections={this.props.user.detections}/>
					<FaceInput onUrlChange={this.onUrlChange} updateUser={this.props.updateUser} userId={this.props.user.id} calculateBoundingBoxPositions={this.calculateBoundingBoxPositions}/>
				</span>				
				<div className="text-center p-t-136">					
						<SignOut onRouteChange={this.props.onRouteChange}/>
				</div>
			</div>
		</div>
	    );
	}
}

export default HomePage;