import axios from 'axios'


export function createWord(word){
	return () => {
		return axios.post('http://localhost:8081/words',word)
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			console.log('error'+error.response)
		})
	}
}
