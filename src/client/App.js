import React, { Component } from 'react';
import './App.css';
import AppView from './components/AppView'
import { connect } from 'react-redux'

export default class App extends Component {
    render() {
      

  	return(
      <div>
  		<AppView />
      </div>
  	) 
  }
}
