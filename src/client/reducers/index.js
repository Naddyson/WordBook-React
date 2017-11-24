


const initialState = {
	words: [
		{
			_id: 123,
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
		default: return state
	}
  
}