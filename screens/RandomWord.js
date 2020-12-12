import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, Text, View } from 'react-native'
import { getRandomWord } from '../api'
import BackMenu from '../components/BackMenu'

export default class RandomWord extends Component {

	static propTypes = {
		route: PropTypes.shape({
			params: PropTypes.object
		})
	}

	state = {
		word: '',
		maxSize: this.props.route.params.max,
		minSize: this.props.route.params.min,
	}

	render() {
		return (
			<BackMenu pop={this.props.navigation.pop}>
				<View style={styles.container}>
					<Text style={styles.text}>{this.state.word}</Text>
					<View style={styles.button}>
						<Button title={'     Criar     '} onPress={this.getWordHandler} color='red' />
					</View>
					<View style={styles.buttonO}>
						<Button title={'Opções'} color='orange' onPress={() => this.props.navigation.navigate('RWordOp', {
							max: this.state.maxSize,
							min: this.state.minSize
						})} />
					</View>
				</View>
			</BackMenu>
		)
	}

	/* componentDidUpdate(prevProps) {
		if (prevProps.route.params?.selection !== this.props.route.params?.selection) {
		  const result = this.props.route.params?.selection;
	  
		  this._onSelectCountry(result);
		}
	} */

	componentDidMount(){
		this.props.navigation.addListener('focus', () => {
			console.log('focus');
			this.setState({
				maxSize: this.props.route.params.max,
				minSize: this.props.route.params.min
			})
		})
	}

	getWordHandler = async () => {
		console.log(this.state.maxSize);
		console.log(this.props.route.params);
		const word = await getRandomWord(this.state.maxSize, this.state.minSize)
		this.setState({ word })
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
