import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { fetchWords } from '../../actions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


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
			checkbox:true
		}
		
	}
	componentDidMount(){
		this.props.onGetWords()
	}
	render(){
		return (
			<Table>
			    <TableHeader
>
			      <TableRow>
			        
			        <TableHeaderColumn>Word</TableHeaderColumn>
			        <TableHeaderColumn>Translation</TableHeaderColumn>
			        <TableHeaderColumn>Description</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    
			    <TableBody>
			    	{ 
			    
				    	this.props.words.map((word,index) => (
				    		<TableRow>
				    		<TableRowColumn>{word.word}</TableRowColumn>
					        <TableRowColumn>{word.translation}</TableRowColumn>
					        <TableRowColumn>{word.description}</TableRowColumn>
					        </TableRow>
					    )
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
function mapDispatchToProps(dispatch){
return {
	onGetWords: () => {
		dispatch(fetchWords());
	}
}
/*
	return {
		onGetWords: () => {
			dispatch(fetchWords())
		}
	}*/
}
		



export default connect(mapStateToProps,mapDispatchToProps)(ItemsTable)