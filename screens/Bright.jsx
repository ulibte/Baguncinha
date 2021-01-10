import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Brightness from 'expo-brightness';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import BackMenu from '../components/BackMenu';

const styles = StyleSheet.create({
  vBrilho: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
    // justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },

  textInput: {
    textAlign: 'center',
    borderColor: '#A72300',
    borderWidth: 2,
    width: Dimensions.get('screen').width,
  },
});

class Bright extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brightSystem: 0,
      brightSliderBar: 0,
    };
  }

  componentDidMount() {
    this.setBrightnessStateAsync();
    this.intervalBrightness = setInterval(this.setBrightnessStateAsync.bind(this), 1000);
    // this.update = 0;
  }

  componentWillUnmount() {
    clearInterval(this.intervalBrightness);
  }

  /* componentDidUpdate() {
    console.log('componentDidUpdate ' + ++this.update);
  } */

  async setBrightnessStateAsync() {
    const { brightSystem, brightSliderBar } = this.state;
    const brightness = await Brightness.getSystemBrightnessAsync();
    if (brightSystem !== brightness) {
      this.setState({ brightSystem, brightSliderBar });
    }

    this.changeBrightAsync.bind(this);
  }

  onSlidingStartHandler = () => {
    clearInterval(this.intervalBrightness);
  };

  onSlidingCompleteHandler = () => {
    this.intervalBrightness = setInterval(this.setBrightnessStateAsync.bind(this), 1000);
  };

  transformNumberBright = (number) => {
    let newNumber = number * 100;
    newNumber = Math.floor(number);
    return `${newNumber}%`;
  };

  async changeBrightAsync(value) {
    const { brightSystem } = this.state;
    this.setState({ brightSystem });
    const response = await Brightness.getPermissionsAsync();
    if (response.granted) {
      Brightness.setSystemBrightnessAsync(value);
    } else {
      const { granted } = await Brightness.requestPermissionsAsync();
      if (granted) {
        Brightness.setSystemBrightnessAsync(value);
      } else {
        alert('Sem permissão');
      }
    }
  }

  render() {
    const { navigation } = this.props;
    const { brightSystem, brightSliderBar } = this.state;

    return (
      <BackMenu pop={navigation.pop}>
        <View style={styles.vBrilho}>
          <Text style={styles.text}>Brilho</Text>
          <Text style={styles.text}>{this.transformNumberBright(brightSystem)}</Text>
          <Slider
            style={{ width: '80%', height: 40 }}
            minimumValue={0.0001}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#A72300"
            onValueChange={this.changeBrightAsync}
            value={brightSliderBar}
            onSlidingStart={this.onSlidingStartHandler}
            onSlidingComplete={this.onSlidingCompleteHandler}
          />
        </View>
      </BackMenu>
    );
  }
}

Bright.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default Bright;
