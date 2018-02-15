import React, {Children} from 'react'
import styles from './TestStyles'
import { css } from 'aphrodite'
import Button from 'material-ui/Button'
import ItemsTable from '../content/ItemsTable'




class TestResults extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	
	render(){
		console.log( this.props.children );
		let length = this.props.length;
		let corrects = this.props.corrects
		let wrongs = this.props.wrongs
		return(

			<div className={css(styles.container)}>
				<h1 className= { css(styles.title)}>You did this!</h1>
				
				<h2 className= { css(styles.title)}> {correct.length} correct of {length} {corrects/length*100}  </h2>

				<h2 className= { css(styles.title)}> You have to learn words below:  </h2>
				{
					wrongs.map(item => {
							<p> {item.word} - {item.translation} </p>
						})
				}
				
			</div>
		)
	}
}

export default TestResults;