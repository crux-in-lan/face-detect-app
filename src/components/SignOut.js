import React from 'react';

const SignOut = (props) => {
	// const {par1, par2} = props;
	return (		
			<a className="txt2" onClick={() => props.onRouteChange('signin')}>
				Sign Out
				<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
			</a>
	)
}

export default SignOut;