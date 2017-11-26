import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import InputAreaContainer from './content/InputAreaContainer'
import ItemsTableContainer from './content/ItemsTableContainer'
import SidebarContainer from './aside/SidebarContainer'

const drawerWidth = 240; //Sidebar have it too
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'auto',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: '100%',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class AppView extends React.Component {

  render() {
    const { classes } = this.props;    

    return (
      <div className={classes.root}>
        
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, classes[`appBar-left`])}>
            <Toolbar>
              
            </Toolbar>
          </AppBar>
          <SidebarContainer/>
          <main className={classes.content}>
            <InputAreaContainer/>
            <ItemsTableContainer/>
          </main>
        </div>
      </div>
    );
  }
}

AppView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppView);