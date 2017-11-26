


const initialState = {
	words: [
		{
			_id: 123,
			word: "Word",
			translation: "Translation",
			description: "description"
		}
	],
	lists: [
		{
			_id: 123,
			name: "One",
			words: []
		},
		{
			_id:111,
			name: "Two",
			words: []
		}
	]
}

export default function words (state = initialState, action) {
	console.log(action)
	switch(action.type){
		case "FETCH_WORDS":{
			return {...state, words: action.payload}
		}
		case "FETCH_LISTS": {
			return {...state, lists: action.payload}
		}
		default: return state
	}
  
}