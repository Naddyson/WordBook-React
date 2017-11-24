import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class CategoryForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: this.props.open
		}
	}
	render(){
		const actions = [
	      <Button
	        label="Cancel"
	        primary={true}
	        onClick={this.handleClose}
	      />,
	      <Button
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onClick={this.handleClose}
	      />
	    ];	
		return(

			<div className="CategoryForm">
				<Dialog
		          title="Dialog With Actions"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >

		        </Dialog>
			</div>
		)
	}
}