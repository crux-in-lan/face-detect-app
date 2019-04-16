import React from 'react';
import './css/PageFrameSignIn.scss';

const PageFrameSinIn = (props) => {
	return (
		<div className="pageframeSignIn">			
			{
				props.children
			}			
		</div>
	)
}

export default PageFrameSinIn;