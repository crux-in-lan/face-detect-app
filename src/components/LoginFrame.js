import React from 'react';
import './LoginFrame.scss';

const LoginFrame = (props) => {
	return (
		<div className="loginframe wrap-login100">
		{
			props.children
		}
		</div>
	)
}

export default LoginFrame;