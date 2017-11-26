import React, { Component } from 'react' 

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Sidebar from './Sidebar'
import {addList} from '../../actions/'

class SidebarContainer extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	addList(list){
		this.props.onAddList(list)
	}

	render(){
		console.log(this.props.lists)
		return (
			<Sidebar lists={this.props.lists} onBtnAddClick={this.addList.bind(this)}/>
		)
	}
}

function mapStateToProps(state){
	return {
		lists: state.lists
	}
}
function mapDispatchToProps(dispatch){
	return {
		onAddList: (newList) => {
			dispatch(addList(newList))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SidebarContainer);