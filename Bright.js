import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Brightness from 'expo-brightness';

export default class Bright extends Component {

  /*   constructor() {
      super();
      this.state = {
        bright: 0.1,
      };
    } */

  state = {
    bright: 0.1,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>0 até 1</Text>
        <Text style={styles.text}>Brilho = {this.state.bright}</Text>
        <TextInput
          style={{...styles.text, ...styles.textInput}}
          onChangeText={this.changeBright.bind(this)}
          value={null}
        />
        <StatusBar style="auto" />
      </View>
    );
  }

  componentDidUpdate() {
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
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  }
});
