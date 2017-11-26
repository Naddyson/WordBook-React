import React from 'react';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer'
import AddListDialog from './AddListDialog'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const drawerWidth = 240;//AppView have it too

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar
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
        <div className={classes.drawerHeader} />

        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="All Words" />
          </ListItem>
          {this.props.lists.map(list => {
            return(
              <ListItem button>
                <ListItemText primary={list.name} />
              </ListItem>
            )
          })}
      </List>
        <AddListDialog/>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar)