import React from 'react'
import Test from './Test'
import { connect } from 'react-redux';
import { fetchWords, deleteWord } from '../../actions'
import TestItem from './TestItem'
import TestResults from './TestResults'

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class TestContainer extends React.Component {
	constructor(props){
		super(props);
		this.props.onGetWords()
		this.state = {
			start: false,
			words: this.props.words,
			currentItemId: 0,
			wrongAnswers: [],
			start: false,
			wrongs: [],
			corrects: [],
			finish: false
		}
		
	}

	componentDidMount(){
		
	}
	pushAnswer(item, answer){
		answer === item.word
		?	this.setState({corrects: {...this.state.corrects, item } })
		:   this.setState({wrongs: { ...this.state.wrongs, item } })
	}
	nextWord(){
		if( currentItemId <= this.state.words.length ){
			this.setState({ currentWord: this.state.currentItemId++ })
		} else {
			this.setState({finish: true})
		}
	}
	isStarted(){
		this.setState({
			start: true
		})
	}
	render(){

		
		console.log(this.state.words)
		
		return (
			<div>
				{
					this.state.finish
					?
					<TestResults 
						listLength = {this.state.words.length}
						wrongs = {this.state.wrongs}
						correct = {this.state.correct}

					/>
					: 
					<Test 
						currentListId={this.props.currentList} 
						start = { this.startTest.bind(this) }
						isStarted = { this.state.start }
						showNextItem = { this.nextWord.bind(this)}
						pushAnswer = {this.pushAnswer.bind(this)}
						currentItem = { this.state.words[this.state.currentItemId] }
						listLength = { length }
						finish = { this.state.finish }
					/>
				}
				
				
				
			</div>
		)
	}
}


function mapStateToProps(state){
	function filter(){
		console.log(state.words)
			if (state.currentList._id != 0){
				return state.words.filter(word => {
					if (word.list === state.currentList._id) return true; return false;
				})
			} else {
				return state.words
			}
		}
	return {
		words: shuffle(filter()),
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
		



export default connect(mapStateToProps,mapDispatchToProps)(TestContainer)