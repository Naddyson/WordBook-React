import React, { Children } from 'react'

class TestSlideShow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			total: 0,
			current: 0
		}
	}

	componentDidMount(){
		const { children } = this.props
		this.setState({ total: Children.count(children)})
	}
	showNext = () => {
		const { total, current} = this.state
		this.setState({
			current: current + 1
		})
	} 

	render(){
		const { children } = this.props

		return(
			{Children.toArray(children)[this.state.current]}
		)
	}
}