

export function fetchWords(){
	return (dispatch) => {
		dispatch({
			type: "FETCH_WORDS"
		})
		
	}
}
export function addWord(word){
	return {
		type: "ADD_WORD",
		payload: word
	}
}