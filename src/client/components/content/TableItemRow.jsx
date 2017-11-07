import React, { Component } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableItemRow extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data,
			index: this.props.index
		}
	}
	render(){
		console.log(data);
		return (
			<TableRow key="index">
		        
		        <TableRowColumn>{this.state.data.word}</TableRowColumn>
		        <TableRowColumn>{this.state.data.translation}</TableRowColumn>
		        <TableRowColumn>{this.state.data.description}</TableRowColumn>
			</TableRow>
		)
	}
}