import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { login } from '../api'

export default class LoginScreen extends Component {
    state = {
        
    }
    

    render(){
        return (<View style={styles.container}>
            <TextInput value={"Usuário"}/>
            <TextInput value={"Senha"}/>
            <Button title={'Entrar'} onPress={login}/>
        </View>)
    }

    
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
})
