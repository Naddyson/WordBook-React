/*import React from 'react'
import { login, resetPassword } from '../../actions/auth'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			errorMessage: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		login(this.state.email, this.state.password)
			.catch((error) => {
				this.setState({errorMessage: 'Invalid email/password'})
			})
		this.props.handleClose()
	}
	resetPassword = () => {
	    resetPassword(this.email.value)
	      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.state.email}.`)))
	      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
 	}

	handleChangeEmail = (e) => {
		this.setState({email: e.target.value})
	}
	handleChangePassword = (e) => {
		this.setState({password: e.target.value})
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
			<DialogTitle id="simple-dialog-title" >Login</DialogTitle>
			<TextField
				label='Login'							
				margin='normal'
				onChange={this.handleChangeEmail}
			/>
			<TextField
				label='Password'	
				type='password'						
				margin='normal'
				onChange={this.handleChangePassword}
			/> 

			<a href='#' onClick={this.resetPassword}> I forgot password </a>

			<Button type='submit' raised color="primary" onClick={this.handleClose}>
			        Login
			</Button>

			<a href='#' onClick={this.props.setRegister} >or register</a>

			<p> {this.state.errorMessage} </p>
		</form>
		)
	}
}

export default Login*/