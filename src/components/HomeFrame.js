import React from 'react';
import './HomeFrame.css';

const HomeFrame = (props) => {
	return (
		<div className="homeframe wrap-login100">
		{
			props.children
		}
		</div>
	)
}

export default HomeFrame;