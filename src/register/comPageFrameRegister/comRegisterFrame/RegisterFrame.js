import React from 'react';
import './css/RegisterFrame.scss';

const RegisterFrame = (props) => {
	return (
		<div className='registerframe'>
			<div className="wrap-login100">
			{
				props.children
			}
			</div>
		</div>
	)
}

export default RegisterFrame;