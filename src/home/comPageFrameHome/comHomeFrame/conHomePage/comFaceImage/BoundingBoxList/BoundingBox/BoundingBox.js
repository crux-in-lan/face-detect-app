import React, {Component} from 'react';
import './css/BoundingBox.scss';

class BoundingBox extends Component {
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		console.log('boundBoxDidMount');
	}

	componentDidUpdate() {
		console.log('boundBoxDidUpdate');
	}

	render() {
		const {active,style} = this.props;
		// console.log(boundingBox.active);		
		return (			
			<div className={`boundingBox ${active}`} style={style}></div>		
		)
	}
}

export default BoundingBox;