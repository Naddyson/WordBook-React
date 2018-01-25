import React from 'react'
import Test from './Test'
import { connect } from 'react-redux';
import { fetchWords, deleteWord } from '../../actions'
import TestItem from './TestItem'

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
			words: shuffle(this.props.words),
			currentWordId: 0,
			wrongAnswers: [],
			start: false
		}
		
	}

	componentDidMount(){
		
	}
	pushWrongAnswer(word){
		this.setState({
			wrongAnswers: { ...this.state.wrongAnswers, word } 
		});
	}
	nextWord(){
		this.setState({ currentWordId: this.state.currentWordId++ })
	}
	startTest(){
		this.setState({
			start: true
		})
	}
	render(){

		
		console.log(this.state.words)
		
		return (
			<div>
				<Test 
					currentList={this.props.currentList} 
					startTest = { this.startTest.bind(this) }
					start = { this.state.start }
				>
					<TestItem
						word = { words[0] } 
						pushWrongAnswer = {this.pushWrongAnswer.bind(this)}
						nextWord = { this.nextWord.bind(this) }
						currentWordId = { this.state.currentWordId }
					/>

				</Test>
				
			</div>
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
		



export default connect(mapStateToProps,mapDispatchToProps)(TestContainer)