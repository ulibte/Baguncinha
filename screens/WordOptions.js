import React from 'react'
import { Button, View, StyleSheet, TextInput, Text, Alert } from 'react-native'
import BackMenu from '../components/BackMenu'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setMaxSize, setMinSize, setOptionMax, setOptionMin } from '../redux/actionCreators'


const WordOptions = props => {

	const ConfirmHandler = () => {
		const optionMax = Number(props.optionMax)
		const optionMin = Number(props.optionMin)
		if (optionMax && optionMin) {
			props.setMaxSize(Math.floor(optionMax))
			props.setMinSize(Math.floor(optionMin))
			props.navigation.pop(1)
		} else {
			Alert.alert(
				'Erro', // title
				'Valor Inválido', // message
				[ // buttons
					{ // first button
						text: 'Ok',
						onPress: () => console.log('Ok pressed'),
						style: 'default',
					},
				],
				{	// options
					cancelable: true,  // if its possible to press outside the alert to dismiss it
					onDismiss: () => console.log('onDismiss callback')
				}  
			)
		}
	}

	return (
		<BackMenu pop={props.navigation.pop}>
			<View style={styles.container}>
				<Text style={styles.text}>{'Máximo de sílabas'}</Text>
				<TextInput style={styles.textInput}
					keyboardType={'numeric'}
					onChangeText={text => props.setOptionMax(text)}
					value={String(props.optionMax)} />
				<Text style={styles.text}>{'Mínimo de sílabas'}</Text>
				<TextInput style={styles.textInput}
					keyboardType={'numeric'}
					onChangeText={text => props.setOptionMin(text)}
					value={String(props.optionMin)} />
				<View style={styles.buttonContainer} >
					<Button title={'Confirmar'} color='orange' onPress={ConfirmHandler} />
				</View>
			</View>
		</BackMenu>
	)
}

WordOptions.propTypes = {
	optionMax: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	optionMin: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),

	setMaxSize: PropTypes.func,
	setMinSize: PropTypes.func,
	setOptionMax: PropTypes.func,
	setOptionMin: PropTypes.func,
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		textAlign: 'center',
		borderColor: '#A72300',
		borderWidth: 2,
		width: '50%',
		color: '#A72300',
		fontSize: 20,
	},
	text: {
		color: 'red',
		fontSize: 20,
	},
	buttonContainer: {
		paddingTop: '25%',
	}
})

const mapStateToProps = ({ randomWord }) => ({
	optionMax: randomWord.optionMax,
	optionMin: randomWord.optionMin,
})

const mapDispatchToProps = {
	setMaxSize,
	setMinSize,
	setOptionMax,
	setOptionMin,
}

export default connect(mapStateToProps, mapDispatchToProps)(WordOptions)