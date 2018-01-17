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

import { Router, IndexRoute, Route, Switch, Link } from 'react-router-dom'
import SidebarContainer from './aside/SidebarContainer'
import WordsField from './WordsField'
import TestContainer from './test/TestContainer'

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
    height: '64px'
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

  tabs: {
    height:'64px',
    width: '150px'
  }
});

class App extends React.Component {

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
            <Tabs value={menuValue} onChange={this.handleChange}>
              <Tab className={classes.tabs} label="Book" component={Link} to='book' />
              <Tab className={classes.tabs} label="Test" component={Link} to='test'/>
              <Tab className={classes.tabs} label="Item Three"/>
            </Tabs>
          </AppBar>
          <SidebarContainer/>
          <main className={classes.content}>
          <Switch>
            <Route path="/book" component={WordsField}/>
            <Route path='/test' component={TestContainer}/>
          </Switch>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(App);