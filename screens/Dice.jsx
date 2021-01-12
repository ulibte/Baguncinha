import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import BackMenu from '../components/BackMenu';
import ResultList from '../components/ResultList';
import {
  setDiceResult,
  setDiceMax,
  updateResultsSections,
  setKeyTest,
} from '../redux/actionCreators';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // KeyboardAvoidingView need this to paddingBottom the textInput
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    textAlign: 'center',
    borderColor: '#A72300',
    borderWidth: 2,
    width: '50%',
    // paddingTop: 250,
  },
  result: {
    color: 'yellow',
    fontSize: 100,
  },
});

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableRollButton: false,
    };

    this.roll = this.roll.bind(this);
  }

  componentDidMount() {
    const { diceMax } = this.props;
    this.validateDiceMax(diceMax);
  }

  /* 	getHandler = key => inputNumber => {
		this.setState({ [key]: inputNumber }, () => { null })
	}
	changeMax = this.getHandler('diceMax') */

  changeMax = (inputNumber) => {
    const { setDiceMaxConnect } = this.props;
    this.validateDiceMax(inputNumber);
    setDiceMaxConnect(inputNumber);
  };

  validateDiceMax = (x) => {
    if (x >= 2 && Number.isInteger(Number(x))) this.setState({ disableRollButton: false });
    else this.setState({ disableRollButton: true });
  };

  roll() {
    const {
      setKeyTestConnect,
      setDiceResultConnect,
      updateResultsSectionsConnect,
      diceMax,
      keyTest,
    } = this.props;
    setKeyTestConnect(keyTest + 1);
    const max = Number(diceMax);
    const { resultsSections } = this.props;
    const result = Math.floor(Math.random() * max) + 1; // dice random number
    setDiceResultConnect(result);
    const resultData = { result, key: keyTest };
    updateResultsSectionsConnect({
      currentSections: resultsSections,
      max,
      result: resultData,
    });
  }

  render() {
    const { navigation } = this.props;
    const { diceResult, diceMax, resultsSections } = this.props;
    const { disableRollButton } = this.state;

    return (
      <BackMenu pop={navigation.pop}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.text}>Resultado</Text>
          <Text style={styles.result}>{diceResult}</Text>
          <Button
            disabled={disableRollButton}
            color="red"
            title="   Lançar   "
            onPress={this.roll}
          />
          <Text style={styles.text}>Número de lados</Text>

          <TextInput
            style={{ ...styles.text, ...styles.textInput }}
            keyboardType="numeric"
            onChangeText={this.changeMax}
            value={String(diceMax)}
          />

          <Text style={styles.text}>Histórico</Text>
          <ResultList resultsSections={resultsSections} />
        </KeyboardAvoidingView>
      </BackMenu>
    );
  }
}

Dice.defaultProps = {
  diceResult: 1,
  diceMax: 6,
  resultsSections: [{ title: '---', data: [] }],
};

Dice.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  keyTest: PropTypes.number.isRequired,
  diceResult: PropTypes.number,
  diceMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resultsSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          result: PropTypes.number,
          key: PropTypes.number,
        })
      ),
    })
  ),

  setKeyTestConnect: PropTypes.func.isRequired,
  setDiceResultConnect: PropTypes.func.isRequired,
  setDiceMaxConnect: PropTypes.func.isRequired,
  updateResultsSectionsConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  keyTest: state.keyTest,
  diceResult: state.dice.diceResult,
  diceMax: state.dice.diceMax,
  resultsSections: state.dice.resultsSections,
});

const mapDispatchToProps = {
  setKeyTestConnect: setKeyTest,
  setDiceResultConnect: setDiceResult,
  setDiceMaxConnect: setDiceMax,
  updateResultsSectionsConnect: updateResultsSections,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
