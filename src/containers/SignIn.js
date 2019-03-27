import React, {Component} from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		const {onRouteChange} = this.props;
		return (
			<div>
				<div>
					<label for='username'>Username:</label>
					<input id='username' type='text' onChange=''/>
				</div>
				<div>
					<label for='password'>Password:</label>
					<input id='password' type='password' onChange=''/>
				</div>
				<div>
					<input type='button' value='Signin' onClick=''/>
					<input type='button' value='Register' onClick=''/>
				</div>
			</div>
		)
	}
}

export default SignIn;