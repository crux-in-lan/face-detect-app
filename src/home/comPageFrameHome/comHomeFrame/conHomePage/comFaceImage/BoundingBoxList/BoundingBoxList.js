import React, {Component} from 'react';
import BoundingBox from './BoundingBox/BoundingBox';

import './css/BoundingBoxList.scss';

class BoundingBoxList extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		const {boundingBoxes} = this.props;

		return boundingBoxes.map(boundingBox => {
			return <BoundingBox key={boundingBox.key} style={boundingBox.style} active={boundingBox.active}/>
		})
		
	}
}

export default BoundingBoxList;