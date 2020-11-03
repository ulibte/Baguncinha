import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text, StyleSheet, Button, FlatList } from 'react-native'
import MyScreen from './MyScreen'
import ResultList from './ResultList'

class Dice extends Component {
    state = {
        diceResult: 0,
        diceMax: 100,
        results: [],
    }

    render() {
        return (
            <MyScreen changeScreen={this.props.changeScreen}>
                <View>
                    <Text style={styles.text} >{`Resultado: ${this.state.diceResult}`}</Text>
                    <Button title={'Roll'} onPress={this.roll} />
                    <ResultList results={this.state.results} />
                </View>
            </MyScreen>
        )
    }

    roll = () => {
        max = Number(this.state.diceMax);
        const result = Math.floor(Math.random() * max - 1) + 1;
        this.setState({ diceResult: result });

        //creating a result object for the retults array 
        const titleData = ``
        this.setState({
            results: [...this.state.results,
            { title: `d${this.state.diceMax}`, data: [result,] }
            ]
        })
        console.log(this.state.results)
    }
}

Dice.propTypes = {
    changeScreen: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
})

export default Dice
