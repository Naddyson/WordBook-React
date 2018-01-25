import React from 'react'
import { Button } from 'material-ui'
import AuthDialog from './AuthDialog'
class LoginButton extends React.Component {
	constructor(props){
		super(props)
		this.state={
			open: false
		}
	}
	
	handleOpen = () => {
		this.setState({
			open: true
		})
	}
	
	handleClose = () => {
		this.setState({
			open: false
		})
	}

	render(){

		return(
			<div className={this.props.className}>
				<Button color="contrast" onClick={this.handleOpen}>Login</Button>
				<AuthDialog open={this.state.open} handleClose={this.handleClose}/>
			</div>
		)
	}
}

export default LoginButton