
import { createWord } from '../api/index.js'

const initialState = {
	words: [
		{
			word: "Word",
			translation: "Translation",
			description: "description"
		}
	]
}

export default function words (state = initialState, action) {
	console.log(action)
	switch(action.type){
		case "FETCH_WORDS":{
			return {words: action.payload}
		}
		case "ADD_WORD": {
			return {...state, words: state.words.concat(action.payload)}
		}
		default: return state
	}
  
}