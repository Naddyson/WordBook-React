import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class CategoryForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: this.props.open
		}
	}
	render(){
		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onClick={this.handleClose}
	      />,
	      <FlatButton
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