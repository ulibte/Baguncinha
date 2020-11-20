import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import * as Brightness from 'expo-brightness';
import PropTypes from 'prop-types'
import BackMenu from '../components/BackMenu'

export default class Bright extends Component {

  state = {
    bright: 0.1,
  }

  render() {
    return (
      <BackMenu navigate={this.props.navigation.navigate}>
        <View style={styles.vBrilho}>
          <Text style={styles.text}>0 até 1</Text>
          <Text style={styles.text}>Brilho = {this.state.bright}</Text>
          <TextInput
            keyboardType={'numeric'}
            style={{ ...styles.text, ...styles.textInput }}
            onChangeText={this.changeBright.bind(this)}
            value={null}
          />
        </View>
      </BackMenu>
    );
  }

  componentDidMount() {
  }

  changeBright(number) {
    if (number <= 1 && number > 0) {
      number = Math.abs(number);
      this.setState({ bright: number });
      (async () => {
        const { status } = await Brightness.requestPermissionsAsync();
        if (status === 'granted') {
          Brightness.setSystemBrightnessAsync(this.state.bright);
        }
      })();
    }
  }



}

Bright.propTypes = {
  navigation: PropTypes.object,
}

const styles = StyleSheet.create({
  vBrilho: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
    //justifyContent: 'center',
  },

  text: {
    fontSize: 40,
    color: "white",
  },

  textInput: {
    textAlign: 'center',
    borderColor: '#A72300',
    borderWidth: 2,
    width: Dimensions.get('screen').width,
  },
});
