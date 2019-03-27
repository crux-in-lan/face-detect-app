import React, {Component} from 'react';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {		
			username: '',
			email: '',
			password: ''
		}
	}

	onUserNameChange = (event) => {
		this.setState({username: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	componentDidUpdate() {
		console.log("username: ", this.state.username);
		console.log("email: ", this.state.email);
		console.log("password: ", this.state.password);
	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div>
				<div>
					<label htmlFor='username'>Username:</label>
					<input id='username' type='text' onChange={this.onUserNameChange}/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input id='email' type='text' onChange={this.onEmailChange}/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input id='password' type='password' onChange={this.onPasswordChange}/>
				</div>
				<div>
					<input type='button' value='Register' onClick={() => onRouteChange('home')}/>
				</div>
			</div>
		)
	}
}

export default Register;