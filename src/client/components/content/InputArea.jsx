import React, { Component } from 'react' 
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 0
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  description: {
  	marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  paper: {
  	padding: '16px 16px 8px 24px'
  },
  button: {
  	margin: theme.spacing.unit,

  }
})
class InputArea extends Component {
	constructor(props){
		super(props)
		this.state = {
			word: "",
			translation: "",
			description: "",
			wordIsEmpty: true,
			translationIsEmpty: true
		}
	}
	
	handleWordChange(e) {
		this.setState({
			word: e.target.value
		})
		if (this.state.word === ''){
			this.setState({wordIsEmpty:true})
			console.log(this.state.word)
		} else {
			this.setState({wordIsEmpty:false})
			console.log(this.state.word)

		}
	}
	handleTranslationChange(e) {
		this.setState({
			translation: e.target.value
		})
		if (this.state.translation === ''){
			this.setState({translationIsEmpty:true})
		} else {
			this.setState({translationIsEmpty:false})
		}
	}
	handleDescriptionChange(e) {
		this.setState({
			description: e.target.value
		})
		
	}
	addWord() {
		var word = {
			word: this.state.word,
			translation: this.state.translation,
			description: this.state.description
		}
		this.props.onAddHandle(word);

		this.setState({
			word: '',
			translation: '',
			description: ''
		})
		
	}
	render() {
		var classes = this.props.classes
		return (
			<Paper elevation={4} className={classes.paper}>
			<Typography type="title">Add new word</Typography>
			<form className={classes.container}>
				<TextField
					label='Word'
					className={classes.textField}
					value={this.state.word}
					onChange={this.handleWordChange.bind(this)}
					margin='normal'
				/>
				<TextField
					label='Translation'
					className={classes.textField}
					value={this.state.translation}
					onChange={this.handleTranslationChange.bind(this)}
					margin='normal'
				/>
				<TextField
					label='Description'
					className={classes.description}
					value={this.state.description}
					onChange={this.handleDescriptionChange.bind(this)}
					margin='normal'
				/>

				
			</form>
			<Button disabled={this.state.wordIsEmpty && this.state.translationIsEmpty} raised color="primary" className={classes.button} onClick={this.addWord.bind(this)}>
			        Add
			</Button>
			</Paper>
				
			
		)
	}
}

InputArea.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(InputArea)