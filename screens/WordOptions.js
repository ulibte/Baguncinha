import React, { useState } from 'react'
import { Button, View, StyleSheet, TextInput, Text } from 'react-native'
import BackMenu from '../components/BackMenu'
import PropTypes from 'prop-types'


const WordOptions = ({ navigation, route: {params} }) => {

    const {max, min} = params
    const [maxOptions, setMaxOptions] = useState(max)
    const [minOptions, setMinOptions] = useState(min)

    const ConfirmHandler = () => {
        navigation.navigate('RWord', {max: maxOptions, min: minOptions})
    }

    return (
        <BackMenu pop={navigation.pop}>
            <View style={styles.container}>
                <Text style={styles.text}>{'Maximo de sílabas'}</Text>
                <TextInput style={styles.textInput}
                    keyboardType={'numeric'}
                    onChangeText={text => setMaxOptions(text)}
                    value={String(maxOptions)} />
                <Text style={styles.text}>{'Minimo de sílabas'}</Text>
                <TextInput style={styles.textInput}
                    keyboardType={'numeric'}
                    onChangeText={text => setMinOptions(text)}
                    value={String(minOptions)} />
                <View style={styles.buttonContainer} >
                    <Button title={'Confirmar'} color='orange' onPress={ConfirmHandler} />
                </View>
            </View>
        </BackMenu>
    )
}

WordOptions.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.object
    })
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

export default WordOptions