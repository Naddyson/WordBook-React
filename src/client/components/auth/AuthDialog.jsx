import React from 'react'

import { css } from 'aphrodite'
import style from './LoginDialogStyle'

import Login from './Login'
import Register from './Register'
import Dialog from 'material-ui/Dialog';

class AuthDialog extends React.Component {
	constructor(props){
		super(props);
		this.state={
			registerSwitch: false
		}
		

	}
	handleClose = () => {
		this.props.handleClose();
	}
	setRegister = () => {
		this.setState({registerSwitch: true})
	}
	setLogin = () => {
		this.setState({registerSwitch: false})
	}

	render() {
		return (
				<Dialog onRequestClose={this.handleClose} open={this.props.open} >
					<div className={css(style.container)}>
						
						{ this.state.registerSwitch 
							? <Register setLogin={this.setLogin} handleClose={this.handleClose} />
							: <Login setRegister={this.setRegister} handleClose={this.handleClose} />
						}
					</div>
				</Dialog>
			
		)
	}

	
}

export default AuthDialog