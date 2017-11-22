
import axios from 'axios'
import { createWord } from '../api/index'
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
	axios.post('http://localhost:8081/words',word);
	return {
		type: "ADD_WORD",
		payload: word
	}
}