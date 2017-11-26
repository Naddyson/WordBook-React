
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



export function addWord(word){
	return dispatch => {
		axios.post('http://localhost:8081/words',word)
		.then(response => {
			console.log(response);
			dispatch(fetchWords());
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

			dispatch(fetchList());
		})
		.catch(error => {
			console.log('error'+error.response)
		})
	}
}