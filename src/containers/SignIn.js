import React, {Component} from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	componentDidUpdate() {
		console.log("email: ", this.state.email);
		console.log("password: ", this.state.password);
	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input id='email' type='text' onChange={this.onEmailChange}/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input id='password' type='password' onChange={this.onPasswordChange}/>
				</div>
				<div>
					<input type='button' value='Signin' onClick={() => onRouteChange('home')}/>
					<input type='button' value='Register' onClick={() => onRouteChange('register')}/>
				</div>
			</div>
		)
	}
}

export default SignIn;