import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer'
import CategoryForm from './CategoryForm'

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: this.props.openSidebar,
      openDialog: false
    }
  }
  handleAddClick(){
    this.setState({
      openDialog: true
    })
  }
  render() {
    return (
      <div>
      <Drawer open={this.state.open}>
          
          <MenuItem>All words</MenuItem>
          <MenuItem onClick={this.handleAddClick.bind(this)} >Add new list</MenuItem>
      </Drawer>
      <CategoryForm open={this.state.openDialog}/>
      </div>
    );
  }
}