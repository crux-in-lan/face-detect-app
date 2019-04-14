import React, {Component} from 'react';
import './faceDetect.css'
class FaceDetect extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	imageUrl: '',//_REM_
		// 	boundingBox : {
		// 		top: undefined,
		// 		right: undefined,
		// 		bottom: undefined,
		// 		left: undefined
		// 	}
		// }
	}

	// onUrlChange = (event) => {
	// 	this.setState({imageUrl: event.target.value});
	// }

	// onDetectSubmit = () => {
	// 	const Clarifai = require('clarifai');
 
	// 	const app = new Clarifai.App({
	// 	 apiKey: 'ab6c42866254412fbbec07825703e19e'
	// 	});

	// 	app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.imageUrl)
	// 	.then(result => {
	// 		// console.log(result.outputs[0].data.regions[0].region_info.bounding_box);//_REM_
	// 		this.calculateBoundingBoxPositions(result.outputs[0].data.regions[0].region_info.bounding_box);
	// 		// console.log('Type of detections: ',this.props.detections);
	// 		fetch(`http://192.168.0.108:3001/detect/${this.props.userId}`,{
	// 			method:'put'
	// 		})
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			if(result.data) {
	// 				this.props.updateUser({detections: result.data});
	// 			} else {
	// 				alert(result.err);
	// 			}
	// 		})
	// 		.catch(err => alert(err));
			
	// 	})
	// 	.catch(err => alert(`Unable to get response from Clarifai. Error: ${err}`));
	// }

	// calculateBoundingBoxPositions = (objPositions) => {
	// 	const image = document.getElementById('imgFace');
	// 	const width = image.width;
	// 	const height = image.height;
	// 	const {bottom_row, left_col, top_row, right_col} = objPositions;
	// 	const bottom = height * (1 - bottom_row); //bottom_row
	// 	const left = width * left_col; //left_col
	// 	const top = height * top_row; //top_row
	// 	const right = width * (1 - right_col); //right_col

	// 	this.setState({boundingBox: {top,right,bottom,left}},() => {
	// 		const bBox = document.getElementsByClassName("boundingBox")[0];
 //  			bBox.classList.add("active");
	// 		// console.log(this.state.boundingBox);
	// 	});
	// }

	render() {		
		const {imageUrl} = this.state;
		return (
			<div>
				<input type='text' onChange={this.onUrlChange}/>
				<input type='button' value="Detect" onClick={() => this.onDetectSubmit()}/>
				<div className='imgContainer'>
					<img id='imgFace' alt='face' src={imageUrl}/>
					<div className='boundingBox' style={this.state.boundingBox}></div>
				</div>
			</div>
		)
	}
}

export default FaceDetect;