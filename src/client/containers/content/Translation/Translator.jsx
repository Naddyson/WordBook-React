import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TranslationTextArea from './TranslationTextArea'
import './Translator.css'

export default class Translator extends Component {
	handleBtnClick(){
		//add item
	}
	render(){
		const btnStyle = {
				  margin: 12,
				};
		return (
			<div className="translator">
				<div className="translator_left">
					<TranslationTextArea defaultLang={1} />
					<RaisedButton	label="Translate" 
								style={btnStyle} 
								onClick={this.handleBtnClick.bind(this)}

					/>
				</div>
				<div className="translator_right">
					<TranslationTextArea defaultLang={2} />
					
					/>
				</div>

			</div>
		)
	}
}