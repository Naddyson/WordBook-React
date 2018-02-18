import React from 'react';
import ReactDOM from 'react-dom';;
import App from './components/App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore();
store.subscribe(() => {
	console.log('Store has changed')
})

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
