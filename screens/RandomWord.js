import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, Text, View } from 'react-native'
import { getRandomWord } from '../api'
import BackMenu from '../components/BackMenu'
import { connect } from 'react-redux'
import { setWord, setMaxSize, setMinSize } from '../redux/actionCreators'

class RandomWord extends Component {

	static propTypes = {
		/* route: PropTypes.shape({
			params: PropTypes.object
		}) */
		word: PropTypes.string,
		maxSize: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		minSize: PropTypes.oneOfType([
			PropTypes.string, 
			PropTypes.number
		]),
		setWord: PropTypes.func,
		setMaxSize: PropTypes.func,
		setMinSize: PropTypes.func,
	}

	render() {
		return (
			<BackMenu pop={this.props.navigation.pop}>
				<View style={styles.container}>
					<Text style={styles.text}>{this.props.word}</Text>
					<View style={styles.button}>
						<Button title={'     Criar     '} onPress={this.getWordHandler} color='red' />
					</View>
					<View style={styles.buttonO}>
						<Button title={'Opções'} color='orange' onPress={() => this.props.navigation.navigate('RWordOp')} />
					</View>
				</View>
			</BackMenu>
		)
	}

	getWordHandler = async () => {
		console.log(this.props.maxSize);
		const word = await getRandomWord(this.props.maxSize, this.props.minSize)
		this.props.setWord(word)
	}

}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'red',
		paddingBottom: '30%',
		fontSize: 25,
	},
	button: {
		position: 'absolute',
		bottom: '25%',
		alignSelf: 'center',
	},
	buttonO: {
		position: 'absolute',
		bottom: '3%',
		alignSelf: 'flex-end',
		borderEndWidth: 10,
	},
})

const mapStateToProps = state => ({
	word: state.randomWord.word,
	maxSize: state.randomWord.maxSize,
	minSize: state.randomWord.minSize,
})
const mapDispatchToProps = {
	setWord, setMaxSize, setMinSize,
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomWord)