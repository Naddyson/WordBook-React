import React, { Component } from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import { fetchWords, deleteWord } from '../../actions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import ItemsTable from './ItemsTable'


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
class ItemsTableContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedWords: [],
			height: '300px',
			fixedHeader: true,
			fixedFooter: true,
			selectable: true,
			multiSelectable: true
		}
		
	}
	componentDidMount(){
		this.props.onGetWords()
	}
	handleDeleteSelected(selected){
		selected.map(wordId => {
			this.props.onDeleteWord(wordId)
		});	
		
	}
	/*handleRowSelection (indices) {
		if (indices === 'all' ) {
			this.setState({ selectedWords: this.props.words })
		} else if ( indices === 'none' ) {
			this.setState({ selectedWords: [] })
		} else {
			let words = indices.map(index => {
				return this.props.words[index];
			})
			this.setState({ selectedWords: words })
		}
	}
	isWordSelected (subjectWord) {
		this.state.selectedWords.forEach(selectedWord => {
			if (subjectWord._id === selectedWord._id) return true;
		})
		return false;
	}
	deleteAllSelectedWords () {
		console.log(this.state.selectedWords)
	}*/

	render(){
		
		return (
			<ItemsTable data={this.props.words} handleDeleteSelected={this.handleDeleteSelected.bind(this)}/>
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
		},
		onDeleteWord: (wordId) => {
			dispatch(deleteWord(wordId))
		}
	}
}
		



export default connect(mapStateToProps,mapDispatchToProps)(ItemsTableContainer)