
const initialState = {
	words: [
		{
			word: "Word",
			translation: "Translation",
			description: "description"
		}
	]
}

export default (state = initialState, action) => {
	console.log(action)
	switch(action.type){
		case "FETCH_WORDS": return state.words
		case "ADD_WORD": return {
			...state, words: state.words.concat(action.payload)
		}
		default: return state
	}
  
}