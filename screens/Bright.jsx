import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
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
      brightSystem: 0.5,
      brightSliderBar: 0.5,
    };

    this.changeBrightAsync = this.changeBrightAsync.bind(this);
    this.setBrightnessStateAsync = this.setBrightnessStateAsync.bind(this);
  }

  async componentDidMount() {
    this.setBrightnessStateAsync();
    this.intervalBrightness = setInterval(this.setBrightnessStateAsync, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalBrightness);
  }

  async setBrightnessStateAsync() {
    const { brightSystem } = this.state;
    const brightness = await Brightness.getSystemBrightnessAsync();
    if (brightSystem !== brightness) {
      this.setState({ brightSystem: brightness, brightSliderBar: brightness });
    }
  }

  onSlidingStartHandler = () => {
    clearInterval(this.intervalBrightness);
  };

  onSlidingCompleteHandler = () => {
    this.intervalBrightness = setInterval(this.setBrightnessStateAsync, 1000);
  };

  transformNumberBright = (number) => {
    /* let newNumber = number * 100;
    newNumber = Math.floor(newNumber);
    return `${newNumber}%`; */
    let numberString = number.toFixed(2);
    numberString = String(numberString);
    return numberString;
  };

  async changeBrightAsync(value) {
    const { navigation } = this.props;
    this.setState({ brightSystem: value });
    const response = await Brightness.getPermissionsAsync();
    if (response.granted) {
      Brightness.setSystemBrightnessAsync(value);
    } else {
      const { granted } = await Brightness.requestPermissionsAsync();
      if (granted) {
        Brightness.setSystemBrightnessAsync(value);
      } else {
        Alert.alert(
          'Erro', // title
          'Sem permissão', // message
          [
            // buttons
            {
              text: 'Sair',
              style: 'destructive',
              onPress: navigation.pop(1),
            },
            {
              text: 'Permitir',
              style: 'default',
              onPress: Brightness.requestPermissionsAsync,
            },
          ],
          {
            // options
            cancelable: true,
          }
        );
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
            minimumValue={0}
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
