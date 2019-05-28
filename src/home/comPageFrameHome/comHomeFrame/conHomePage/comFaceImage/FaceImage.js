import React, {Component} from 'react';
import BoundingBoxList from './BoundingBoxList/BoundingBoxList';
import './css/FaceImage.scss';

class FaceImage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {imageURL,boundingBoxes} = this.props;
		return (
			<div className='imgContainer'>
				<img id='imgFace' alt='face' src={imageURL}/>
				<BoundingBoxList boundingBoxes = {boundingBoxes}/>
			</div>
		)
	}
}

export default FaceImage;