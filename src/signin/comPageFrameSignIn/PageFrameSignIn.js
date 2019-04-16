import React from 'react';
import './css/PageFrameSignIn.scss';

const PageFrameSinIn = (props) => {
	return (
		<div className="pageframe">			
			{
				props.children
			}			
		</div>
	)
}

export default PageFrameSinIn;