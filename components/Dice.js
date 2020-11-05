import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text, StyleSheet, Button } from 'react-native'
import MyScreen from './MyScreen'
import ResultList from './ResultList'

let keyResult = 0

class Dice extends Component {
    state = {
        diceResult: 0,
        diceMax: 6,
        results: [{ title: '', data: [] },],
        disableRollButton: false,
    }

    render() {
        return (
            <MyScreen changeScreen={this.props.changeScreen}>
                <View style={styles.container}>
                    <Text style={styles.text} >{'Resultado'}</Text>
                    <Text style={styles.result}>{this.state.diceResult}</Text>
                    <Button disabled={this.state.disableRollButton}
                        color={'red'} title={'   Lançar   '} onPress={this.roll} />
                    <Text style={styles.text}>Número de lados</Text>
                    <TextInput style={{ ...styles.text, ...styles.textInput }}
                        keyboardType={'numeric'}
                        onChangeText={this.changeMax.bind(this)}
                        value={String(this.state.diceMax)} />
                    <Text style={styles.text}>Histórico</Text>
                    <ResultList results={this.state.results} />
                </View>
            </MyScreen>
        )
    }

    roll = () => {
        const max = Number(this.state.diceMax)
        const results = this.state.results
        const result = Math.floor(Math.random() * max) + 1;
        const resultObj = { result: result, key: ++keyResult }

        this.setState({ diceResult: result });

        //creating a result object for the retults array 
        const newResults = changeFirstIndex(results, resultObj, max)

        this.setState({
            results: newResults
        })
        console.log(keyResult) //----------------------------------------------------

    }

    changeMax = inputNumber => {
        const diceMax =  inputNumber
        this.setState({ diceMax })
        if(inputNumber >= 2 && Number.isInteger(Number(inputNumber)))
            this.setState({disableRollButton: false})
        else
            this.setState({disableRollButton: true})
    }


}

const changeFirstIndex = (array, result, max) => {
    if (array[0].title === `d${max}`) {
        return [{ title: array[0].title, data: [result, ...array[0].data] },
        ...array.slice(1)]
    } else {
        return [{ title: `d${max}`, data: [result] }, ...array]
    }
}

Dice.propTypes = {
    changeScreen: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
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
    },
    result: {
        color: 'yellow',
        fontSize: 100,
    },
})

export default Dice
