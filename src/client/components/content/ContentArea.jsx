import React, { Component } from 'react';
import InputArea from './InputArea'
import ItemsTable from './ItemsTable'


export default class ContentArea extends Component {
	render(){
		return(
			<div style={{marginLeft: '280px'}}>
				<h1>All words</h1>
				<InputArea />
				<ItemsTable />
			</div>
		)
	}
}