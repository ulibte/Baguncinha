import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { logInUser, loginDebug } from '../redux/actionCreators';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  login = async () => {
    const { userName, password } = this.state;
    const { logInUserConnect } = this.props;
    await logInUserConnect(userName, password);
  };

  render() {
    const { loginErr, loginDebugConnect } = this.props;

    return (
      <View style={styles.container}>
        <TextInput placeholder="Usuário" onChangeText={(userName) => this.setState({ userName })} />
        <TextInput placeholder="Senha" onChangeText={(password) => this.setState({ password })} />
        <Text>{loginErr}</Text>
        <Button title="Entrar" onPress={this.login} />
        <Button title="Entrar Debug" onPress={loginDebugConnect} />
      </View>
    );
  }
}

LoginScreen.defaultProps = {
  loginErr: '',
};

LoginScreen.propTypes = {
  loginErr: PropTypes.string,

  logInUserConnect: PropTypes.func.isRequired,
  loginDebugConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loginErr: state.loginErr,
  token: state.token,
});

const mapDispatchToProps = {
  logInUserConnect: logInUser, // userIsLogged: userIsLogged
  loginDebugConnect: loginDebug,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
