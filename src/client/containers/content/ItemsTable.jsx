import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TableItemRow from './TableItemRow'

export default class ItemsTable extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		const testdata = {
			index: 1,
			word: 'word',
			translation: 'слово'
		}
		return (
			<Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Word</TableHeaderColumn>
			        <TableHeaderColumn>Translation</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    
			    <TableBody>
			      <TableItemRow data={testdata}/>
			    </TableBody>
			  </Table>
		)
	}
}