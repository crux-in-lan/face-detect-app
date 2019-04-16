import React from 'react';
import './css/FooterFrameSignIn.scss';
const FooterFrameSignIn = (props) => {
	return (
		<div className="footerframesignin">			
			{
				props.children
			}			
		</div>
	)
}

export default FooterFrameSignIn;