import React from 'react';
import './css/RegisterFrame.scss';

const RegisterFrame = (props) => {
	return (
		<div className='registerframe'>
			{
				props.children
			}
		</div>
	)
}

export default RegisterFrame;