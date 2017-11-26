
import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles';
import { addList }from '../../actions/'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AddListDialog extends React.Component {
  state = {
    open: this.props.openDialog,
    name: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleSubmitClick = () => {
    var newList = {
      name: this.state.name,
      words: []
    }
    addList(newList)
    this.setState({name: '', open:false})
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    var classes = this.props.classes;
    return (
      <div>
        <Button 
          fab color="primary" 
          aria-label="add" 
          className={this.props.classes.button}
          onClick={this.handleClickOpen.bind(this)}
        >
          <AddIcon />
        </Button>
          <Dialog
            open={this.state.open}
            transition={Transition}
            keepMounted
            onRequestClose={this.handleRequestClose}
          >
            <DialogTitle>{"Add new list"}</DialogTitle>
            <DialogContent>
              <TextField
                label='Name'
                
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin='normal'
              />
            </DialogContent>
            <DialogActions>
              <Button raised color="accent" 
                onClick={this.handleRequestClose} 
                className={classes.button}
              >
                Cancel
              </Button>
              <Button raised color="primary" className={classes.button}
                onClick={this.handleSubmitClick}
              >
                Submit
              </Button>
              
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddListDialog);