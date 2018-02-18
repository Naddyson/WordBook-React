/*import React from 'react'
import { auth } from '../../actions/auth'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

class Register extends React.Component {
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
		auth(this.state.email, this.state.password)
			.catch((error) => {
				this.setState({errorMessage: error})
			})
		this.props.handleClose()
	}

	handleChangeEmail = (e) => {
		this.setState({email: e.target.value})
	}
	handleChangePassword = (e) => {
		this.setState({password: e.target.value})
	}
	render(){
		return(
			<form>
			<DialogTitle id="simple-dialog-title" >Register</DialogTitle>
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

			<Button onClick={this.handleSubmit} raised color="primary">
			        Register
			</Button>

			<a href='#' onClick={this.props.setLogin} >or login</a>

			<p> {this.state.errorMessage} </p>
		</form>
		)
	}
}

export default Register*/