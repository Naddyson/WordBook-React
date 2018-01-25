import React, { Component } from 'react' 

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Sidebar from './Sidebar'
import {addList,fetchLists,setCurrentList} from '../../actions/'

class SidebarContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	componentWillMount(){
		this.props.onFetchLists()
	}
	render(){
		console.log(this.props.lists)
		return (
			<App lists={this.props.lists}/>
		)
	}
}

function mapStateToProps(state){
	return {
		lists: state.lists,
		currentList: state.currentList
	}
}
function mapDispatchToProps(dispatch){
	return {
		onAddList: (newList) => {
			dispatch(addList(newList))
		},
		onFetchLists: () => {
			dispatch(fetchLists())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SidebarContainer);