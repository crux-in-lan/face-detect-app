import React from 'react';
import './PageFrame.css';

const PageFrame = (props) => {
	return (
		<div className="pageframe limiter">
			<div className="container-login100">
			{
				props.children
			}
			</div>
		</div>
	)
}

export default PageFrame;