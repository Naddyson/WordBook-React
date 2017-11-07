import React, { Component } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableItemRow extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		return (
			<TableRow>
		        
		        <TableRowColumn>{this.props.data.word}</TableRowColumn>
		        <TableRowColumn>{this.props.data.translation}</TableRowColumn>
		        <TableRowColumn>{this.props.data.description}</TableRowColumn>
			</TableRow>
		)
	}
}