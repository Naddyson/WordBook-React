import React from 'react'
import Test from './Test'
import { connect } from 'react-redux';
import { fetchWords, deleteWord } from '../../actions'
import TestItem from './TestItem'
import TestResults from './TestResults'

//Ахтунг! Здесь откровенный говнокод.

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
			isStarted: false,
			words: shuffle(this.props.words),
			currentItemId: 0,
			wrongAnswers: [],
			wrongs: [],
			corrects: [],
			finish: false,
			currentList: this.props.currentList
		}
		
	}

	componentDidMount(){
		
	}
	pushAnswer(item, answer){
		
		
		if(answer === item.word){
			let corrects = this.state.corrects
			corrects.push(item)
			this.setState({corrects: corrects })
		} else {
			let wrongs = this.state.wrongs
			wrongs.push(item)
			this.setState({wrongs: wrongs })
		}
		
		this.nextWord()
	}
	nextWord = () => {
		
		if( this.state.currentItemId <= this.state.words.length ){
			this.setState({ currentWord: ++this.state.currentItemId})
		} else {
			this.setState({finish: true})
		}
	}
	start(){
		this.setState({
			isStarted: true
		})
	}
	restart = () => {
		this.setState({
			isStarted: false,
			words: shuffle(this.props.words),
			currentItemId: 0,
			wrongAnswers: [],
			wrongs: [],
			corrects: [],
			finish: false,
			currentList: this.props.currentList
		})
	}
	render(){

		
		console.log(this.state.words)
		let currentWord = this.state.words[this.state.currentItemId]
		console.log(currentWord)
		console.log(this.state.currentItemId)
		return (
			<div>
				{
					this.state.currentItemId >= this.state.words.length
					?
					<TestResults 
						listLength = {this.state.words.length}
						wrongs = {this.state.wrongs}
						corrects = {this.state.corrects}
						restart = { this.restart }

					/>
					: 
					<Test 
						currentList={this.props.currentList} 
						start = { this.start.bind(this) }
						isStarted = { this.state.isStarted }
						nextItem = { this.nextWord.bind(this)}
						pushAnswer = {this.pushAnswer.bind(this)}
						item = { currentWord }
						listLength = { this.props.words.length }
						finish = { this.state.finish }
					/>
				}
				
				
				
			</div>
		)
	}
}


function mapStateToProps(state){
	let filterByList = () =>{
		
			if (state.currentList._id != 0){
				return state.words.filter(word => {
					if (word.list === state.currentList._id) return true; return false;
				})
			} else {
				return state.words
			}
		}
	return {
		words: filterByList(),
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