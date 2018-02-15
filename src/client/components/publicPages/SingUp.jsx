import React, { Component } from 'react'
import { css } from 'aphrodite'
import { Paper, TextField, Button} from 'material-ui'
import styles from './styles'
import icon from './create-icon.png'
import {auth} from '../../actions/auth'

class SingUp extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			repeat_pass: '',
			error: ''

		}
	}
	handleEmailChange = (e) => {
		this.setState({email: e.target.value})
	}
	handlePasswordChange = (e) => {
		this.setState({password: e.target.value})
	}
	handleRepeatPassChange = (e) => {
		this.setState({repeat_pass: e.target.value})
	}
	handleSubmit = (e) => {
		if (this.state.password === this.state.repeat_pass){
			auth(this.state.email, this.state.password)
      		.catch(e => this.setState({error: e}))
		}
		else {
			this.setState({error: 'Passwords do not match'})
		}
	}
	render(){
		return (
			<Paper elevation={7} className={ css(styles.singup) }>
				<Paper elevation={0} className={css(styles.singupHeader)}>
					<h1 className={css(styles.h1)}>Sing Up</h1>
					<h2 className={css(styles.h2)}>Create a new account</h2>
					<img className={css(styles.imgHeader)} src={icon}/>
				</Paper>
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
					
					<TextField
						label='Repeat password'
						type='password'
						className={css(styles.textField)}
						value={this.state.repeat_pass}
						onChange={this.handleRepeatPassChange.bind(this)}
						margin='normal'
					/>
					<p className={css(styles.error)}>{this.state.error}</p>
					
				</div>
				<Button raised color="primary" onClick={this.handleSubmit} className={css(styles.buttonSubmit)} >
				        Sing up
					</Button>
			</Paper>
		)
	}
} 

export default SingUp