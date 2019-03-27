import React from 'react';

const FaceDetect = (props) => {
	const {par1, par2} = props;
	return (
		<div>
			<input type='text'/>
			<input type='button' value="Detect"/>
			<img alt='face' src=''/>
		</div>
	)
}

export default FaceDetect;