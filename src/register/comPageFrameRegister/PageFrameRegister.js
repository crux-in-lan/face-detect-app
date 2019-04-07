import React from 'react';
import '../css/PageFrameRegister.scss';

const PageFrameRegister = (props) => {
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

export default PageFrameRegister;