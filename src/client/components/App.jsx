import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppProtected from './AppProtected';


import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { BrowserRouter, IndexRoute, Route, Switch,Redirect, withRouter } from 'react-router-dom'

//

import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory'







class App extends React.Component {
	state = {
		authed: true,
		loading: true,
		bool: true

	}
	
	
	render(){
		return(
			
			<Switch>
				
				<Route  path="/" component={AppProtected}/>
			</Switch>
				
		)
	}
}



export default withRouter(App);