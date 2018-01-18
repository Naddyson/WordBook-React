import React from 'react'
import Test from './Test'
import { connect } from 'react-redux';
import { fetchWords, deleteWord } from '../../actions'

class TestContainer extends React.Component {
	constructor(props){
		super(props)


	}

	componentWillMount(){
		this.props.onGetWords()
	}

	render(){
		return (
			<div>
				<Test words={this.props.words}/>
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