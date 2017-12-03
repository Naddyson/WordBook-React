import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	icon_delete: {
		height: '24px',
		width: '24px'
	}
});
 class ListItemComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name: this.props.data.name,
			id: this.props.data._id,
			showDeleteBtn: false
		}
	}
	componentDidMount(){
		
	}
	onMouseEnter(){
		this.setState({showDeleteBtn:true})
	}
	onMouseLeave(){
		this.setState({showDeleteBtn:false})
	}
	clickDeleteHandle(){
		this.props.onDeleteList(this.state.id);
	}
	selectList(){
		console.log(this.props.data)
		this.props.onSelectCurrentList(this.props.data)
	}

	render(){
		var classes = this.props.classes;
		return(
			
				<ListItem button 
					onMouseEnter={this.onMouseEnter.bind(this)}
					onMouseLeave={this.onMouseLeave.bind(this)}
					onClick={this.selectList.bind(this)}
				>
					<ListItemText primary={this.state.name} />
					{ this.state.showDeleteBtn ? (
					
						<IconButton className={classes.icon_delete} onClick={this.clickDeleteHandle.bind(this)} aria-label="Delete">
							<DeleteIcon />
						</IconButton>
					
					) : (<div/>)
					}

				</ListItem>
           
		)
	}
}

export default withStyles(styles)(ListItemComponent);