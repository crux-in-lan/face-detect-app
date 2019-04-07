import React from 'react';

const Rank = (props) => {
	// console.log(props);
	return (
		<div>
			<h1>{`${props.username}, you have made ${props.detections} detections`}</h1>
		</div>
	)
}

export default Rank;