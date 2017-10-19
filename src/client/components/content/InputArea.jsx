import React, { Component } from 'react' 
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

export default class InputArea extends Component {

	render(){
		return(
			<div className="InputArea">
				
				    <TextField hintText="Word" />
				    <br/>
				    
				    <TextField hintText="Translation" />
				    <br/>
				    
				    <TextField hintText="Description" />
				    <br/>
				    
				    <RaisedButton label="Add" 
								
					/>
				
			</div>

		)
	}
}