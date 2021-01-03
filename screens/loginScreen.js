import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { logInUser, loginDebug } from "../redux/actionCreators";

class LoginScreen extends Component {

    static propTypes = {
        loginErr: PropTypes.string,

        logInUser: PropTypes.func,
        loginDebug: PropTypes.func,
    }

    state = {
        userName: "",
        password: '',
    }
    

    render(){
        return (<View style={styles.container}>
            <TextInput placeholder={"Usuário"} onChangeText={userName => this.setState({userName})}/>
            <TextInput placeholder={"Senha"} onChangeText={password => this.setState({password})}/>
            <Text>{this.props.loginErr}</Text>
            <Button title={'Entrar'} onPress={this.login}/>
            <Button title={'Entrar Debug'} onPress={this.props.loginDebug} />
        </View>)
    }

    login = async () => {
        await this.props.logInUser(this.state.userName, this.state.password)
    }
        
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
})



const mapStateToProps = state => ({
    loginErr: state.loginErr,
    token: state.token,
})

const mapDispatchToProps = {
    logInUser, // userIsLogged: userIsLogged 
    loginDebug,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)