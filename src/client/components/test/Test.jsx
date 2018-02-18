import React, {Children} from 'react'
import styles from './TestStyles'
import { css } from 'aphrodite'
import Button from 'material-ui/Button'
import TestItem from './TestItem'
import Paper from 'material-ui/Paper'
import { LinearProgress } from 'material-ui/Progress';




class Test extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			word: this.props.item,
			progressStep:  100 / this.props.listLength,
			progressValue: 0 
		}
	}
	start(){
		this.props.start()
	}
	
	pushAnswer = (word,answer) => {
		this.props.pushAnswer(word,answer)
		this.setState({
			progressValue: this.state.progressValue+this.state.progressStep
		})
	}
	
	render(){
		console.log(this.props.currentList)
		return(

			<Paper elevation={4} className={css(styles.paper)}>
				<h1 className= { css(styles.title)}>Test: { this.props.currentList.name } ({ this.props.listLength })</h1>
				<LinearProgress mode="determinate" value={this.state.progressValue} />
		        <br />
		        
				{
					
					this.props.isStarted 
					? <TestItem 
						item = { this.props.item } 
						pushAnswer = {this.pushAnswer}/> 	
					: <Button raised color="primary" className={css(styles.button)} onClick={this.start.bind(this)}>
						Start
						</Button>
					

				}
				
			</Paper>
		)
	}
}

export default Test;