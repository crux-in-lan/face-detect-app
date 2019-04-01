import React from 'react';

const SignOut = (props) => {
	// const {par1, par2} = props;
	return (
		<div>
			<h1 onClick={() => props.onRouteChange('signin')} style={{cursor:"pointer"}}>Sign Out</h1>
		</div>
	)
}

export default SignOut;