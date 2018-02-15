import React from 'react'
import styles from './TestItemStyles'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

class TestItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			word: this.props.word,
			answer: ''
		}
	}
	handleTranslationChange(e) {
		this.setState({
			answer: e.target.value
		})
	}
	
	nextButtonClickHandle(){
		this.props.pushAnswer(this.state.word, this.state.answer);
	}

	render(){
		console.log(this.state.word)
		return (
			<Paper elevation={4} className= {css(styles.paper)}>
				<h2>Translate word: {this.state.word}</h2>
				<TextField
					label='Translation'
					className={css(styles.textField)}
					value={this.state.translation}
					onChange={this.handleTranslationChange.bind(this)}
					margin='normal'
				/>
				
				<Button raised color="primary" className={css(styles.button)} onClick={this.nextButtonClickHandle.bind(this)}>
			        Next
				</Button>
				
			</Paper>
		)
	}
}

TestItem.propTypes = {
  word: PropTypes.object.isRequired,
};


export default TestItem