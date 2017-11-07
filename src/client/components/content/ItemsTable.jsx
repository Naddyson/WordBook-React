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

class ItemsTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			words: this.props.words
		}
	}
	render(){
		const { words } = this.props
		const { fetchWords } = this.props.fetchWords
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
				    	this.props.words.map((word,index) => {
				    		<TableItemRow index={index} data={word}/>} 
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

/*function mapDispatchToProps(dispatch){
	return {
		fetchWords: bindActionsCreators(fetchWords, dispatch)
	}
}*/

export default connect(mapStateToProps, {fetchWords})(ItemsTable)