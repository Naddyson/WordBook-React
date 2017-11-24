import React, { Component } from 'react' 
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import { addWord } from '../../actions/'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


class InputArea extends Component {
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
	btnClickHandle(e){
		e.preventDefault();
		let word = {
				word: this.state.word,
				translation: this.state.translation,
				description: this.state.description
			}
		this.props.onAddWord(word);
	}

	render(){
		
		return(
			<div className="InputArea">
				
				    <TextField hintText="Word" onChange={this.onWordChange.bind(this)}/>
				    <br/>
				    
				    <TextField hintText="Translation" onChange={this.onTranslationChange.bind(this)} />
				    <br/>
				    
				    <TextField hintText="Description" onChange={this.onDescriptionChange.bind(this)}/>
				    <br/>
				    
				    <Button label="Add" onClick={this.btnClickHandle.bind(this)}
								
					/>
				
			</div>

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


export default connect(state => ({}), mapDispatchToProps)(InputArea);