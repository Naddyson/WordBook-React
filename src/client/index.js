import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, IndexRoute, Route } from 'react-router-dom'
//import routes from './routes'




/*import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux'
*/import createHistory from 'history/createBrowserHistory'

const history = createHistory();
//const middleware = routerMiddleware(history);
const store = configureStore();



ReactDOM.render(
	<Provider store={store}>
		
		<Router history={history} >
			<Route path="/" component={App}>
				
			</Route>
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();

store.subscribe(() => {
	console.log('Store has changed')
})