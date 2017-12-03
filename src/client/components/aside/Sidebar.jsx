import React from 'react';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer'
import AddListContainer from './AddListContainer'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import ListItemContainer from './ListItemContainer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import logo from '../../logo.png'

const drawerWidth = 240;//AppView have it too

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  logo: {
    dispay: 'block',
    margin: '4px 0px 0px 20px'
  }
})

 class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openDialog: false,
      left: true
    }
  }
  
  handleAddClick(){
    this.setState({
      openDialog: true
    })
  }
  setCurrentList(){

  }

  render() {
    var classes = this.props.classes
    return (
       <Drawer
        type="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.drawerHeader}>
          <img src={logo} className={classes.logo}/>
        </div>

        <Divider />
        <List>
          {this.props.lists.map(list => {
            return(
              <ListItemContainer data={list} />
            )
          })}
          <Divider />
        </List>

        <AddListContainer/>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar)