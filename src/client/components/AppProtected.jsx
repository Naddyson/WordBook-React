import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui'

import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button'
import { Router, IndexRoute, Route, Switch, Link } from 'react-router-dom'
import SidebarContainer from './aside/SidebarContainer'
import BookContentField from './BookContentField'
import TestContainer from './test/TestContainer'

import { logout } from '../actions/auth'

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
    height: '64px',
    display: 'inline-block'
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

  tab: {
    height:'64px',
    width: '150px',

  },
  tabs: {
    float: 'left',
    width: '50%'
  },
  loginButton: {
    float: 'right',
    position:'relative',
    height: '50px',
    width: '80px'
  }
});

class AppProtected extends React.Component {

  state = { 
    value: 0,
  } 

  handleChange = (event, value) => {
    this.setState({menuValue: value})
  }

  render() {
    const { classes } = this.props;    
    const { menuValue } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, classes[`appBar-left`])}>
            <Tabs value={menuValue} onChange={this.handleChange} className={classes.tabs}>
              <Tab className={classes.tab} label="Book" component={Link} to='book' />
              <Tab className={classes.tab} label="Test" component={Link} to='test'/>
            </Tabs>
            <Button className={classes.loginButton} onClick={logout()}>Logout</Button>
          </AppBar>
          <SidebarContainer/>
          <main className={classes.content}>
            <Switch>
              <Route path="/book" component={BookContentField}/>
              <Route path='/test' component={TestContainer}/>
              
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

AppProtected.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(AppProtected);