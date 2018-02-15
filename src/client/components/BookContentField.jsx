import React from 'react'
import InputAreaContainer from './content/InputAreaContainer'
import ItemsTableContainer from './content/ItemsTableContainer'
import ScrollArea from 'react-scrollbar'

class BookContentField extends React.Component {
	constructor(props){
		super(props)

	}

	render() {
		return (
			<ScrollArea
				horizontal = { false }
			>
				<InputAreaContainer/>
            	<ItemsTableContainer/>
			</ScrollArea>
		)
	}

	
}

export default BookContentField;