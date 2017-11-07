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
import { fetchWords } from '../../actions'
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux'
/*
let createHandlers = function(dispatch){
	console.log(fetchWords())
	let fetchWords = () =>{
		dispatch(fetchWords())
	} 
	return {
		fetchWords
	}
}
*/
class ItemsTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		
	}
	render(){
		console.log(this.props.words)
		
		return (
			<Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>Word</TableHeaderColumn>
			        <TableHeaderColumn>Translation</TableHeaderColumn>
			        <TableHeaderColumn>Description</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    
			    <TableBody>
			    	{ 
				    	this.props.words.map((word,index) => 

				    		<TableItemRow key={index} data={word}/>
				    	
				    	)
				    	
			    	}
			    	
			    </TableBody>
			  </Table>
		)
	}
}

function mapStateToProps(state){
	return {
		words: state.words
	}
}



export default connect(mapStateToProps)(ItemsTable)