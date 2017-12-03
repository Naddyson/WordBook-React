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

	render(){
	
		return (
			<ItemsTable data={this.props.words} listName={this.props.currentList.name} handleDeleteSelected={this.handleDeleteSelected.bind(this)}/>
		)
	}
}


function mapStateToProps(state){
	function filter(){
			if (state.currentList._id != 0){
				return state.words.filter(word => {
					if (word.list === state.currentList._id) return true; return false;
				})
			} else {
				return state.words
			}
		}
	return {
		words: filter(),
		currentList: state.currentList
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