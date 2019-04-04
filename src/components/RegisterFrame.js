import React from 'react';
import './RegisterFrame.scss';

const RegisterFrame = (props) => {
	return (
		<div className="registerframe wrap-login100">
		{
			props.children
		}
		</div>
	)
}

export default RegisterFrame;