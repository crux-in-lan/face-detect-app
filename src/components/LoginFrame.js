import React from 'react';
import './LoginFrame.scss';

const LoginFrame = (props) => {
	return (
		<div className='loginframe'>
			<div className="wrap-login100">
			{
				props.children
			}
			</div>
		</div>
	)
}

export default LoginFrame;