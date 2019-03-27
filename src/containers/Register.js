import React, {Component} from 'react';

class Register extends Component {
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
					<label for='email'>Email:</label>
					<input id='email' type='text' onChange=''/>
				</div>
				<div>
					<label for='password'>Password:</label>
					<input id='password' type='password' onChange=''/>
				</div>
				<div>
					<input type='button' value='Register' onClick=''/>
				</div>
			</div>
		)
	}
}

export default Register;