import React from 'react';
import './css/PageFrameRegister.scss';

const PageFrameRegister = (props) => {
	return (
		<div className="pageframeRegister">			
				{
					props.children
				}
		</div>			
	)
}

export default PageFrameRegister;