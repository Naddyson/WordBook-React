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

	restart = () => {
		this.props.restart()
	}
	
	render(){
		
		let listLength = this.props.listLength;
		let corrects = this.props.corrects
		let wrongs = this.props.wrongs
		console.log(wrongs)
		return(

			<div className={css(styles.container)}>
				<h1 className= { css(styles.title)}>You did this!</h1>
				
				<h2> {corrects.length} correct of {listLength}  </h2>

				<h2> You have to learn words below:  </h2>
				{
					wrongs.map(item => {
						return(
							<p> {item.word} - {item.translation} </p>
							)
						})
				}
				<Button raised color="primary" className={css(styles.button)} onClick={this.restart.bind(this)}>
					Restart
				</Button>
				
			</div>
		)
	}
}

export default TestResults;