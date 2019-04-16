import React, {Component} from 'react';
import './css/FaceImage.scss';
class FaceImage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {imageURL,boundingBox} = this.props;
		return (
			<div className='imgContainer'>
				<img id='imgFace' alt='face' src={imageURL}/>
				<div className='boundingBox' style={boundingBox}></div>
			</div>
		)
	}
}

export default FaceImage;