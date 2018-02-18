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
			
			answer: ''
		}
	}
	handleAnswerChange(e) {
		this.setState({
			answer: e.target.value
		})
	}
	
	nextButtonClickHandle(){
		this.setState({ answer: '' })
		this.props.pushAnswer(this.props.item, this.state.answer);
	}

	render(){
		console.log(this.props.item)
		return (
			<div elevation={4} className= {css(styles.paper)}>
				<h2>Translate word: {this.props.item.translation}</h2>
				<TextField
					label='Answer'
					className={css(styles.textField)}
					value={this.state.answer}
					onChange={this.handleAnswerChange.bind(this)}
					margin='normal'
				/>
				
				<Button raised color="primary" className={css(styles.button)} onClick={this.nextButtonClickHandle.bind(this)}>
			        Next
				</Button>
				
			</div>
		)
	}
}



export default TestItem