import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};
export default class SelectLanguage extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.defaultLang
		}
	}
	
	handleChange(event,index,value){
		this.setState({value});
	}
	render() {

		return(
			<SelectField
	          floatingLabelText="Language"
	          value={this.state.value}
	          onChange={this.handleChange}
	        >
	          <MenuItem value={1} primaryText="English" />
	          <MenuItem value={2} primaryText="Russian" />
	        </SelectField>
        	
		)
	}
}