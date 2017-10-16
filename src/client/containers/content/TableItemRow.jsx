import React, { Component } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableItemRow extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data
		}
	}
	render(){
		return (
			<TableRow>
		        <TableRowColumn>{this.state.data.index}</TableRowColumn>
		        <TableRowColumn>{this.state.data.word}</TableRowColumn>
		        <TableRowColumn>{this.state.data.translation}</TableRowColumn>
			</TableRow>
		)
	}
}