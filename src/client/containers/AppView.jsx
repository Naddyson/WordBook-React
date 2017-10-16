import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './aside/Sidebar'
import ContentArea from './content/ContentArea'



export default class AppView extends Component {
	constructor(props){
		super(props);
		this.state = {
			openSidebar: true
		}
	}
	
	render(){
		return (
			<div className="app_view">
				<MuiThemeProvider>
					<Sidebar open={this.state.openSidebar} className="sidebar"/>
					<ContentArea />
				</MuiThemeProvider>
			</div>
		)
	}
}