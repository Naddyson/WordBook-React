import React, { Component } from 'react'

import logo from './logo.png'

export default class Ico extends Component {
	render(){
		return(
			<div>
			<img src={logo} alt={'marker-checked'}/>
			</div>
		)
	}
}