
import axios from 'axios'
export function fetchWords() {
	/*return {
		type: "FETCH_WORDS",
		payload: new Promise((resolve,reject) => {
			console.log(new Promise((resolve,reject) => {
				resolve(axios.get('http://localhost:8081/words'));
			})
		})
	}*/
	return dispatch => {
		axios.get('http://localhost:8081/words').then((response) => dispatch({
			type: "FETCH_WORDS",
			payload: response.data
		}))
	}
}



export function addWord(word,toListId){
	return dispatch => {
		axios.post('http://localhost:8081/words',word)
		.then(response => {
			console.log(response);
			if (toListId != 0 ){
				var wordId = {wordId: response.data[0]._id};
				console.log('wordid= '+wordId)
				axios.post('http://localhost:8081/lists/push_word/'+toListId, wordId)
				.then(response => {
					console.log(response)
					dispatch(fetchLists());
					dispatch(fetchWords());
				})
				.catch(error => {
					console.log('error'+error.response)
				})
			} else {
				dispatch(fetchWords());
			}
			
		})
		.catch(error => {
			console.log('error'+error.response)
		})



	}
}

export function deleteWord(wordId){
	return dispatch => {
		axios.delete('http://localhost:8081/words/'+wordId)
		.then(response => {
			console.log(response);
			dispatch(fetchWords())
		})
		.catch(error => {
			console.log('error'+error.response)
		})
	}
}


export function fetchLists(){
	return dispatch => {
		axios.get('http://localhost:8081/lists').then((response) => dispatch({
			type: "FETCH_LISTS",
			payload: response.data
		}))
	}
}

export function addList(list){
	return dispatch => {

		console.log(list)
		axios.post('http://localhost:8081/lists',list)
		.then(response => {
			console.log(response);

			dispatch(fetchLists());
		})
		.catch(error => {
			console.log('error'+error.response)
		})
	}
}

export function deleteList(listId){
	return dispatch => {
		axios.delete('http://localhost:8081/lists/'+listId)
		.then(response => {
			console.log(response);
			dispatch(fetchLists())
		})
		.catch(error => {
			console.log('error'+error.response)
		})
	}
}

export function setCurrentList(list){
	return dispatch => {
		dispatch({
			type: "SET_CURRENT_LIST",
			payload: list
		})
	}
	
}