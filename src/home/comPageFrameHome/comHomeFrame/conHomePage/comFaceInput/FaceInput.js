import React, {Component} from 'react';
import './css/FaceInput.scss';
class FaceInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	onDetectSubmit = () => {
		const Clarifai = require('clarifai');
 
		const app = new Clarifai.App({
		 apiKey: 'ab6c42866254412fbbec07825703e19e'
		});
		const imageURL = document.getElementById('imageURL');
		app.models.predict("a403429f2ddf4b49b307e318f00e528b", imageURL.value)
		.then(result => {
			// console.log(result.outputs[0].data.regions[0].region_info.bounding_box);//_REM_
			this.props.calculateBoundingBoxPositions(result.outputs[0].data.regions[0].region_info.bounding_box);
			// console.log('Type of detections: ',this.props.detections);
			fetch(`http://192.168.0.108:3001/detect/${this.props.userId}`,{
				method:'put'
			})
			.then(response => response.json())
			.then(result => {
				if(result.data) {
					this.props.updateUser({detections: result.data});
				} else {
					alert(result.err);
				}
			})
			.catch(err => alert(err));
			
		})
		.catch(err => alert(`Unable to get response from Clarifai. Error: ${err}`));
	}

	render() {
		const {onUrlChange, par2} = this.props;
		return (
			<div className='faceinput'>
				<div className="wrap-input100">
					<input className="input100" type="text" name="imageURL" id='imageURL' placeholder="URL" onChange={onUrlChange}/>
					<span className="focus-input100"></span>
					<span className="symbol-input100">
						<i className="fa fa-link" aria-hidden="true"></i>
					</span>
				</div>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn" onClick={() => this.onDetectSubmit()}>
						Detect
					</button>
				</div>
			</div>
		)
	}
}

export default FaceInput;