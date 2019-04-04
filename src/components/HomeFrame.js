import React from 'react';
import './HomeFrame.scss';

const HomeFrame = (props) => {
	return (
		<div className="homeframe">
			<div className="wrap-login100">
			{
				props.children
			}
			</div>
		</div>
	)
}

export default HomeFrame;