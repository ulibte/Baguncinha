import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import * as Brightness from 'expo-brightness';
import PropTypes from 'prop-types'
import BackMenu from '../components/BackMenu'
import Slider from '@react-native-community/slider';

export default class Bright extends Component {

  state = {
    bright: 0.1,
    systemBright: null,
  }

  render() {
    return (
      <BackMenu pop={this.props.navigation.pop}>
        <View style={styles.vBrilho}>
          <Text style={styles.text}>0 até 1</Text>
          <Text style={styles.text}>Brilho: {this.state.systemBright}</Text>
          <TextInput
            keyboardType={'numeric'}
            style={{ ...styles.text, ...styles.textInput }}
            onChangeText={this.changeBrightAsync.bind(this)}
            value={null}
          />
          <Slider
            style={{ width: '60%', height: 40 }}
            minimumValue={0.0001}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#A72300"
            onValueChange={this.changeBrightAsync.bind(this)}
          />
        </View>
      </BackMenu>
    );
  }

  componentDidMount() {
    this.setBrightnessStateAsync()
    this.intervalBrightness = setInterval(this.setBrightnessStateAsync.bind(this), 1000)
    this.update = 0
  }

  componentWillUnmount() {
    clearInterval(this.intervalBrightness)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate ' + ++this.update);
  }

  async setBrightnessStateAsync() {
    const brightness = await Brightness.getSystemBrightnessAsync()
    if (this.state.systemBright !== brightness) {
      this.setState({ systemBright: brightness })
    }
  }

  async changeBrightAsync(value) {
    if (value <= 1 && value > 0) {
      value = Math.abs(value);
      this.setState({ bright: value });

      const response = await Brightness.getPermissionsAsync()
      if (response.granted) {
        await Brightness.setSystemBrightnessAsync(this.state.bright)
      } else {
        const {granted} = await Brightness.requestPermissionsAsync();
        if (granted) {
          await Brightness.setSystemBrightnessAsync(this.state.bright)
        } else {
          alert('Sem permissão')
        }
      }
      await this.setBrightnessStateAsync()
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
