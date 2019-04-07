import React from 'react';
import './css/SignInFrame.scss';

const SignInFrame = (props) => {
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

export default SignInFrame;