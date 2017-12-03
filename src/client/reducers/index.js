


const initialState = {
	currentList: {
		_id: 0,
		name: 'All words'
	},
	words: [],
	lists: [
		{
			_id: 0,
			name: "All words"
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
		case "SET_CURRENT_LIST": {
			return {...state, currentList: action.payload}
		}
		default: return state
	}
  
}