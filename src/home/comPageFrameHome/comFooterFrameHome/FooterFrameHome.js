import React from 'react';
import './css/FooterFrameHome.scss';
const FooterFrame = (props) => {
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

export default FooterFrame;