import React from 'react';
import './css/FooterFrameRegister.scss';
const FooterFrameRegister = (props) => {
	return (
		<div className="footerframe">
			<div className="wrap-login100">
			{
				props.children
			}
			</div>
		</div>
	)
}

export default FooterFrameRegister;