import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppProtected from './AppProtected';


import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { BrowserRouter, IndexRoute, Route, Switch,Redirect, withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory'





function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to="/auth"/>}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to="/book"/>}
    />
  )
}



class App extends React.Component {
	state = {
		authed: true,
		loading: true,
		bool: true

	}
	
	

	render(){
		return(
			
			<Switch>
				{/*<PublicRoute authed={ this.state.authed } path="/auth" component={StartPage}/>*/}
				<PrivateRoute authed={ this.state.authed } path="/" component={AppProtected}/>
			</Switch>
				
		)
	}
}

/*function mapStateToProps(state){
	return {
		authed: state.isAuthenticated
	}
}

function mapDispatchToProps(dispatch){
	return {
		setUserStatus: (bool) => {
			dispatch(setUserStatus(bool))
		}
	}
}*/

/*
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));*/

export default App