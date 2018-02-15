import React, { Component } from 'react'
import styles from './styles'
import { css } from 'aphrodite'
import { Paper, TextField, Button} from 'material-ui'
import icon from './lock-icon.png'
import {login, onAuthStateChanged} from '../../actions/auth'

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			error: 'asdsad'

		}
	}
	handleEmailChange = (e) => {
		this.setState({email: e.target.value})
	}
	handlePasswordChange = (e) => {
		this.setState({password: e.target.value})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		login(this.state.email, this.state.password)
			.catch((error) => {
				this.setState({error: "Invalid login/password"})
			})
			
		}

	render(){
		return (
			<Paper elevation={7} className={ css(styles.singin) }>
				<header className={css(styles.loginHeader)}>
					<h1 className={css(styles.h1)}>Login</h1>
					<h2 className={css(styles.h2)}>Already have an account?</h2>
					<img className={css(styles.imgHeader)} src={icon}/>
				</header>
				<div className={css(styles.form)}>
					<TextField
						label='Email'
						className={css(styles.textField)}
						value={this.state.email}
						onChange={this.handleEmailChange.bind(this)}
						margin='normal'
					/>
					
					<TextField
						label='Password'
						type='password'
						className={css(styles.textField)}
						value={this.state.password}
						onChange={this.handlePasswordChange.bind(this)}
						margin='normal'
					/>
				
					<p className={css(styles.error)}>{this.state.error}</p>

					
					
				</div>
				<Button raised color="primary" onClick={this.handleSubmit} className={css(styles.buttonSubmit)} >
				        Login
				</Button>
			</Paper>
		)
	}
} 

export default Login