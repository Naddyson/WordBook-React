import React, { Component } from 'react' 
import InputArea from './InputArea'
import { addWord } from '../../actions/'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const styles = {
	root: {
		width: '50%',
		float:'left',
	},
	word: {
		width: '50%',
		float:'left',
	},
	translation: {
		width: '50%',
		float: 'right',
	}
}

class InputAreaContainer extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			word: '',
			translation: '',
			description: ''
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
		this.props.onAddWord(word);
	}

	render(){
		
		return(
			<InputArea onAddHandle={this.addWordHandle.bind(this)}/>

		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		onAddWord: (newWord) => {
			dispatch(addWord(newWord))
		}
	}
}


export default connect(state => ({}), mapDispatchToProps)(InputAreaContainer);