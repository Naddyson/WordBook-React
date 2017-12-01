import React, { Component } from 'react' 
import InputArea from './InputArea'
import { addWord } from '../../actions/'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class InputAreaContainer extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			word: '',
			translation: '',
			description: '',
			currentListId: this.props.currentListId
		}
	}
	onWordChange(e){
		this.state.word = e.target.value;
	}
	onTranslationChange(e){
		this.state.translation = e.target.value;
	}
	onDescriptionChange(e){
		this.state.description = e.target.value;
	}
	addWordHandle(word){		
		this.props.onAddWord(word,this.props.currentList._id);
	}

	render(){
		
		return(
			<InputArea onAddHandle={this.addWordHandle.bind(this)}/>

		)
	}
}

function mapStateToProps(state){
	return {
		currentList: state.currentList
	}
}

function mapDispatchToProps(dispatch){
	return {
		onAddWord: (newWord,currentListId) => {
			dispatch(addWord(newWord,currentListId))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(InputAreaContainer);