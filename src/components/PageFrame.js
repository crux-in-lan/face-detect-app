import React from 'react';
import './PageFrame.scss';

const PageFrame = (props) => {
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

export default PageFrame;