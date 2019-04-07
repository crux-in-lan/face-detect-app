import React from 'react';
import './css/PageFrameSignIn.scss';

const PageFrameSinIn = (props) => {
	return (
		<div className="pageframe">
			<div className="limiter">
				<div className="container-login100">
				{
					props.children
				}
				</div>
			</div>
		</div>
	)
}

export default PageFrameSinIn;