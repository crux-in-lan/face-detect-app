import React from 'react';
import './css/FooterFrameSignIn.scss';
const FooterFrameSignIn = (props) => {
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

export default FooterFrameSignIn;