import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import BackMenu from '../components/BackMenu'
import ResultList from '../components/ResultList'
import { setDiceResult, setDiceMax, updateResultsSections, setDisableRollButton, setKeyTest } from '../redux/actionCreators'

class Dice extends Component {

	render() {
		return (
			<BackMenu pop={this.props.navigation.pop}>
				<KeyboardAvoidingView behavior='padding' style={styles.container}>
					<Text style={styles.text} >{'Resultado'}</Text>
					<Text style={styles.result}>{this.props.diceResult}</Text>
					<Button disabled={this.props.disableRollButton}
						color={'red'} title={'   Lançar   '} onPress={this.roll.bind(this)} />
					<Text style={styles.text}>Número de lados</Text>

					<TextInput style={{ ...styles.text, ...styles.textInput }}
						keyboardType={'numeric'}
						onChangeText={this.changeMax}
						value={String(this.props.diceMax)} />

					<Text style={styles.text}>Histórico</Text>
					<ResultList resultsSections={this.props.resultsSections} />
				</KeyboardAvoidingView>
			</BackMenu>
		)
	}

	componentDidMount() {
	}

	roll() {
		this.props.setKeyTest(this.props.keyTest + 1)
		const max = Number(this.props.diceMax)
		const { resultsSections } = this.props
		const result = Math.floor(Math.random() * max) + 1; //dice random number
		this.props.setDiceResult(result)
		const resultData = { result, key: this.props.keyTest }
		this.props.updateResultsSections({
			currentSections: resultsSections,
			max,
			result : resultData
		})
	}

/* 	getHandler = key => inputNumber => {
		this.setState({ [key]: inputNumber }, () => { null })
	}
	changeMax = this.getHandler('diceMax') */
	changeMax = inputNumber => {
		this.validateDiceMax(inputNumber)
		this.props.setDiceMax(inputNumber)
	}

	validateDiceMax = x => {
		if (x >= 2 && Number.isInteger(Number(x)))
			this.props.setDisableRollButton(false)
		else
			this.props.setDisableRollButton(true)
	}

}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end', //KeyboardAvoidingView need this to paddingBottom the textInput
	},
	text: {
		color: 'white',
		fontSize: 20,
	},
	textInput: {
		textAlign: 'center',
		borderColor: '#A72300',
		borderWidth: 2,
		width: '50%',
		//paddingTop: 250,
	},
	result: {
		color: 'yellow',
		fontSize: 100,
	},
})

Dice.propTypes = {
	navigation: PropTypes.object.isRequired,
	keyTest: PropTypes.number,
	diceResult: PropTypes.number,
	diceMax: PropTypes.number,
	resultsSections: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			data: PropTypes.array
		})
	),
	
	setKeyTest: PropTypes.func,
	setDiceResult: PropTypes.func,
	setDiceMax: PropTypes.func,
	updateResultsSections: PropTypes.func,
	setDisableRollButton: PropTypes.func,
}

const mapStateToProps = state => ({
	keyTest: state.keyTest,
	diceResult: state.dice.diceResult,
	diceMax: state.dice.diceMax,
	resultsSections: state.dice.resultsSections,
	disableRollButton: state.dice.disableRollButton
})


const mapDispatchToProps = {
	setKeyTest,
	setDiceResult,
	setDiceMax,
	updateResultsSections,
	setDisableRollButton,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice)
