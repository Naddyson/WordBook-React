import React from 'react'
import ListItemComponent from './ListItemComponent'
import { connect } from 'react-redux';
import { deleteList, setCurrentList } from '../../actions'

	class ListItemContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	
	componentDidMount(){

	}

	render(){
		
		return (
			<ListItemComponent data={this.props.data} selectCurrentList={this.props.onSelectCurrentList(list)} />
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		onDeleteList: (listId) => {
			dispatch(deleteList(listId))
		},
		onSelectCurrentList: (list) => {
			dispatch(setCurrentList(list))
		}
	}
}

export default connect(state => ({}), mapDispatchToProps)(ListItemComponent);