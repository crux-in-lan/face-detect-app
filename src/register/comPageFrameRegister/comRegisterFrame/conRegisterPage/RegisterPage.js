import React, {Component} from 'react';
import './css/RegisterPage.scss';

class RegisterPage extends Component {
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

	onRegisterSubmit = (event) => {
		fetch('http://192.168.0.108:3001/register',{
			method:'post',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify(this.state)
		})
		.then(response => response.json())
		.then(result => {
			if(result.data) {
				alert(result.data);
				this.props.onRouteChange('home');
			} else {
				alert(result.err);				
			}
		})
		.catch(err => alert(err));
	}

	conponentDidMount() {

	}

	render() {
		const {onRouteChange} = this.props;
		return (			
			<div className='register'>
				<div className="login100-pic js-tilt">
					<img alt="IMG" src={require('./img/img-01.png')}/>
				</div>

				<div className="login100-form">
					<span className="login100-form-title">
						Member Register
					</span>

					<div className="wrap-input100">
						<input className="input100" type="text" name="username" placeholder="Username" onChange={this.onUserNameChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user-circle-o" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100">
						<input className="input100" type="text" name="email" placeholder="Email" onChange={this.onEmailChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100">
						<input className="input100" type="password" name="pass" placeholder="Password" onChange={this.onPasswordChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={() => this.onRegisterSubmit()}>
							Register
						</button>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" onClick={() => onRouteChange('signin')}>
							Sign in
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default RegisterPage;