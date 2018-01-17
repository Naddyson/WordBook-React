import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppView from './components/AppView';
import SingupPage from './components/auth/SingupPage';
import LoginPage from './components/auth/LoginPage';
import ListPage from './components/ListPage';


export default (
	<Route path='/' components={AppView} />
		
)