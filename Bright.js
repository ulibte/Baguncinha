import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import * as Brightness from 'expo-brightness';
import BackButton from './BackButton'

export default class Bright extends Component {

  /*constructor(props) {
      super(props);
      this.state = {
          bright: 0.1,
        };
      console.log(props)
      }  */

  state = {
    bright: 0.1,
  }

  render() {
    return (
      <View style={styles.vScreen}>
        <BackButton changeScreen={this.props.changeScreen} />
        <View style={styles.vBrilho}>
          <Text style={styles.text}>0 até 1</Text>
          <Text style={styles.text}>Brilho = {this.state.bright}</Text>
          <TextInput
            style={{ ...styles.text, ...styles.textInput }}
            onChangeText={this.changeBright.bind(this)}
            value={null}
          />
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }

  componentDidMount() {
  }

  changeBright(text) {
    let numberTest = Number(text);
    console.log();
    if (numberTest != NaN && numberTest <= 1 && numberTest > 0) {
      numberTest = Math.abs(numberTest);
      this.setState({ bright: numberTest });
      (async () => {
        const { status } = await Brightness.requestPermissionsAsync();
        if (status === 'granted') {
          Brightness.setSystemBrightnessAsync(this.state.bright);
        }
      })();
    }
  }



}


const styles = StyleSheet.create({
  vBrilho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  text: {
    fontSize: 40,
    color: "white"
  },

  textInput: {
    borderColor: 'white',
    borderWidth: 2,
    width: 350
  },

  vScreen: {
    flexGrow: 1,
    backgroundColor: 'black',
  }

});
