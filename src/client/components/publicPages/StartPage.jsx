import React from 'react'

import { css } from 'aphrodite'
import styles from './styles'
import SingUpContainer from './SingUpContainer'
import LoginContainer from './LoginContainer'


class StartPage extends React.Component {

	render(){
		return(
			<div className={css(styles.container)}>
				<div className={css(styles.formContainer)}>
					<LoginContainer/>
					<SingUpContainer/>

				</div>
			</div>
		)
	}
}

export default StartPage