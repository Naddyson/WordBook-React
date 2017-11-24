import React from 'react';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer'
import CategoryForm from './CategoryForm'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: this.props.openSidebar,
      openDialog: false,
      left: true
    }
  }
  /*toggleDrawer(side, open){
    this.setState({
      [side]: open
    })
  }*/
  handleAddClick(){
    this.setState({
      openDialog: true
    })
  }

  render() {
    return (
      <Paper className='sidebar'>
      <Button>НФН</Button>
        <MenuList>
          <MenuItem>All words</MenuItem>
          <MenuItem onClick={this.handleAddClick.bind(this)} >Add new list</MenuItem>
        </MenuList>
      <CategoryForm open={this.state.openDialog}/>
      </Paper>
    );
  }
}