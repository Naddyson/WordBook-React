import React, { Component } from 'react';
import './App.css';
import AppView from './components/AppView'
import { connect } from 'react-redux'

class App extends Component {
    render() {
      

  	return(
      <div>
  		<AppView />
      </div>
  	) 
  }
}
function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
