import React, { Component } from 'react' 
import AddListDialog from './AddListDialog'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';//узнать что это
import Sidebar from './Sidebar'
import {addList} from '../../actions/'

class SidebarContainer extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	addListHandle(list){
		this.props.onAddList(list)
	}

	render(){
		console.log(this.props.lists)
		return (
			<AddListDialog lists={this.props.lists} onBtnAddClick={this.addListHandle.bind(this)}/>
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