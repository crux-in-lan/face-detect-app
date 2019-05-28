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
			boundingBoxes : []
		}
	}

	onUrlChange = (event) => {
		this.setState({imageURL: event.target.value});
	}

	calculateBoundingBoxPositions = (objPositions) => {
		// console.log(objPositions);
		objPositions.forEach(region => {
			const image = document.getElementById('imgFace');
			const width = image.width;
			const height = image.height;
			const {bottom_row, left_col, top_row, right_col} = region.region_info.bounding_box;
			const bottom = height * (1 - bottom_row); //bottom_row
			const left = width * left_col; //left_col
			const top = height * top_row; //top_row
			const right = width * (1 - right_col); //right_col

			this.setState((prevState) => {
				boundingBoxes: prevState.boundingBoxes.push({
					key: prevState.boundingBoxes.length ? prevState.boundingBoxes[prevState.boundingBoxes.length-1].key + 1 : 0,
					style: {top,right,bottom,left},
					active: 'active'
				});
			});				
		});
	}

	render() {
		// console.log(this.state.boundingBoxes);
		return (		
	  <div className='homepage'>
			<div className="login100-pic js-tilt">
				<FaceImage imageURL={this.state.imageURL} boundingBoxes={this.state.boundingBoxes}/>
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