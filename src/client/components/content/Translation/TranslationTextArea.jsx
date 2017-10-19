import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectLanguage from './SelectLanguage'


class TranslationTextArea extends Component {
	constructor(props){
		super(props);
		this.state = {
			defaultLang: this.props.defaultLang
		}
	}
	render(){
		return(
			<div >
			<SelectLanguage defaultLang={this.state.defaultLang} />
				<TextField
					hintText="Hint Text"
				/>

			</div>
		)
	}
}
    


export default TranslationTextArea;