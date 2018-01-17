import React from 'react'
import InputAreaContainer from './content/InputAreaContainer'
import ItemsTableContainer from './content/ItemsTableContainer'

class WordsField extends React.Component {
	constructor(props){
		super(props)

	}

	render() {
		return (
			<div>
				<InputAreaContainer/>
            	<ItemsTableContainer/>
			</div>
		)
	}

	
}

export default WordsField;