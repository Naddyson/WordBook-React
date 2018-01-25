import React, {Children} from 'react'
import styles from './TestStyles'
import { css } from 'aphrodite'
import Button from 'material-ui/Button'
import TestItem from './TestItem'




class Test extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	startTest(){
		this.props.startTest()
	}
	
	render(){
		console.log(Children.toArray( this.props.children ));
		
		return(

			<div className={css(styles.container)}>
				<h1 className= { css(styles.title)}>Test: {this.props.currentList.name}</h1>
				<h2 className = {css(styles.title)}>Total Words: {Children.count(this.props.children)} </h2>
				{
					this.props.start 
					? 
					<div/> // Children.toArray(this.props.children )[this.props.currentWordId]
					: 
					<Button raised color="primary" className={css(styles.button)} onClick={this.startTest.bind(this)}>
			        	Start
					</Button>

				}
				
			</div>
		)
	}
}

export default Test;