import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppProtected from './AppProtected';
import StartPage from './StartPage'

import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { Router, IndexRoute, Route, Switch,Redirect } from 'react-router-dom'
//import routes from './routes'

import { firebaseAuth } from '../config/constants'



/*import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux'
*/import createHistory from 'history/createBrowserHistory'

const history = createHistory();
//const middleware = routerMiddleware(history);
const store = configureStore();


store.subscribe(() => {
	console.log('Store has changed')
})

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: 'auth', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='book' />}
    />
  )
}


export default class App extends React.Component {
	state = {
		authed: false,
		loading: true
	}
	componentDidMount () {
		this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
			console.log(user)
			if (user) {
				this.setState({
					authed: true,
					loading: false,
				})
			} else {
				this.setState({
				authed: false,
				loading: false
				})
			}
		})
	}
	componentWillUnmount () {
		this.removeListener()
	}

	render(){
		return(
			<Provider store={store}>

				<Router history={history} >
					<Switch>
						<PublicRoute authed={this.state.authed} path="/auth" component={StartPage}/>
						<PrivateRoute authed={this.state.authed} path="/" component={AppProtected}/>
					</Switch>
				</Router>
			</Provider>
		)
	}
}
