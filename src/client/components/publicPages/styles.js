import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
	container:{
		backgroundColor: '2196f3',
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		overflow: 'auto'
	},
	formContainer: {
		width: '800px',
		height: '500px',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		margin: 'auto'
	},
	singin: {
		width: "46%",
		height: '90%',
		float: 'left',
		position: 'relative',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	singup: {
		width: "46%",
		height: '90%',
		float: 'right',
		position: 'relative',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	singupHeader: {
		backgroundColor: 'F08080',
		width: '100%',
		height: '20%',
		position: 'relative',
		top: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left'
	},
	loginHeader: {
		backgroundColor: '00ff80',
		width: '100%',
		height: '20%',
		position: 'relative',
		top: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left'
	},
	h1: {
		
		marginBottom: 0,
		marginTop: 17,
		marginLeft: 20
	},
	h2: {
		fontWeight: "normal",
		marginTop: 0,
		marginLeft: 20,
		fontSize: '20px'
	},
	imgHeader: {
		marginLeft: '290px',
		marginTop: '15px',
		position: 'absolute',
		height: '64px',
		width: '64px'
	},
	form: {
		
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		textAlign: 'center'
	},
	textField: {
		width: '300px',
		marginLeft: '30px'
	},
	buttonSubmit: {
		position: 'absolute',
		width: '150px',
		bottom: 20,
		left: 115

	},
	error: {
		color: 'red'
	}




})