import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import * as Brightness from 'expo-brightness';
import PropTypes from 'prop-types'
import BackMenu from '../components/BackMenu'
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
import { setBrightSystem, setBrightSliderBar } from "../redux/actionCreators";

class Bright extends Component {

  render() {
    return (
      <BackMenu pop={this.props.navigation.pop}>
        <View style={styles.vBrilho}>
          <Text style={styles.text}>Brilho</Text>
          <Text style={styles.text}>{this.transformNumberBright(this.props.brightSystem)}</Text>
          <Slider
            style={{ width: '80%', height: 40 }}
            minimumValue={0.0001}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#A72300"
            onValueChange={this.changeBrightAsync.bind(this)}
            value={this.props.brightSliderBar}
            onSlidingStart={this.onSlidingStartHandler}
            onSlidingComplete={this.onSlidingCompleteHandler}
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

  /* componentDidUpdate() {
    console.log('componentDidUpdate ' + ++this.update);
  } */

  async setBrightnessStateAsync() {
    const brightness = await Brightness.getSystemBrightnessAsync()
    if (this.props.brightSystem !== brightness) {
			this.props.setBrightSystem(brightness)
			this.props.setBrightSliderBar(brightness)
    }
  }

  onSlidingStartHandler = () => {
    clearInterval(this.intervalBrightness)
  }

  onSlidingCompleteHandler = () => {
    this.intervalBrightness = setInterval(this.setBrightnessStateAsync.bind(this), 1000)
  }

  async changeBrightAsync(value) {
		this.props.setBrightSystem(value)
    const response = await Brightness.getPermissionsAsync()
    if (response.granted) {
      Brightness.setSystemBrightnessAsync(value)
    } else {
      const { granted } = await Brightness.requestPermissionsAsync();
      if (granted) {
        Brightness.setSystemBrightnessAsync(value)
      } else {
        alert('Sem permissão')
      }
    }
  }

  transformNumberBright = number => {
    number = number * 100
    number = Math.floor(number)
    return number + '%'
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
    fontSize: 20,
    color: "white",
  },

  textInput: {
    textAlign: 'center',
    borderColor: '#A72300',
    borderWidth: 2,
    width: Dimensions.get('screen').width,
  },
});

const mapStateToProps = state => ({
	brightSystem: state.bright.system,
	brightSliderBar: state.bright.sliderBar
})

const mapDispatchToProps = {
	setBrightSystem,
	setBrightSliderBar,
}

export default connect(mapStateToProps, mapDispatchToProps)(Bright)