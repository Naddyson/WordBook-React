

export function fetchWords(){	
	return {
		type: "FETCH_WORDS"		
	}
}

export function addWord(word){
	return {
		type: "ADD_WORD",
		payload: word
	}
}