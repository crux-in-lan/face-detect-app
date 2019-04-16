import React from 'react';
import './css/SignInFrame.scss';

const SignInFrame = (props) => {
	return (		
		<div className='loginframe'>			
			{
				props.children
			}
		</div>		
	)
}

export default SignInFrame;