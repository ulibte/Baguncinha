import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { login } from '../api'

export default class LoginScreen extends Component {
    state = {
        username: "",
        password: '',
        errorText: '',
    }
    

    render(){
        return (<View style={styles.container}>
            <TextInput placeholder={"Usuário"} onChangeText={username => this.setState({username})}/>
            <TextInput placeholder={"Senha"} onChangeText={password => this.setState({password})}/>
            <Text>{this.state.errorText}</Text>
            <Button title={'Entrar'} onPress={this.loginHandler}/>
        </View>)
    }

    loginHandler = async () => {
        console.log(this.state.username);
        try {
            const loginRes = await login(this.state.username, this.state.password)

            console.log("login sucess");
        } catch ({message}) {
            this.setState({errorText: message})
        }
    }

        
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
})
