import React, {Component} from 'react';
import './font/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/SignInPage.scss';

class SignInPage extends Component {
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

	onSignInSubmit = (event) => {
		fetch('http://192.168.0.108:3001/signin',{
			method: 'post',
			headers:{'Content-type':'application/json'},
			body: JSON.stringify(this.state)
		})
		.then(response => response.json())
		.then(result => {
			if(result.data) {
				this.props.updateUser(result.data);
				this.props.onRouteChange('home');	
			} else {
				alert(result.err);
			}		
		})
		.catch(err => {alert(err)});
	}

	render() {
		const {onRouteChange} = this.props;
		return (
				<div className='signin'>			 
					<div className="login100-pic js-tilt" data-tilt>
						<img alt="IMG" src={require('./img/img-01.png')}/>
					</div>

					<div className="login100-form">
						<span className="login100-form-title">
							Member Login
						</span>

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
							<button className="login100-form-btn" onClick={() => this.onSignInSubmit()}>
								Login
							</button>
						</div>

						<div className="text-center p-t-12">
							<span className="txt1">
								Forgot
							</span>
							<a className="txt2" href="#">
								Username / Password?
							</a>
						</div>

						<div className="text-center p-t-136">
							<a className="txt2" onClick={() => onRouteChange('register')}>
								Create your Account
								<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</a>
						</div>						
					</div>							 
				</div>										
		)
	}
}

export default SignInPage;