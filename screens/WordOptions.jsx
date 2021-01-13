import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, TextInput, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackMenu from '../components/BackMenu';
import { setMaxSize, setMinSize } from '../redux/actionCreators';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'center',
    borderColor: '#A72300',
    borderWidth: 2,
    width: '50%',
    color: '#A72300',
    fontSize: 20,
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  buttonContainer: {
    paddingTop: '25%',
  },
});

const WordOptions = (props) => {
  const { navigation, maxSize, minSize, setMaxSizeConnect, setMinSizeConnect } = props;

  const [optionMax, setOptionMax] = useState(maxSize);
  const [optionMin, setOptionMin] = useState(minSize);
  let isOptionANumber = true;

  useEffect(() => {
    const optionMaxTest = Number(optionMax);
    const optionMinTest = Number(optionMin);
    if (optionMaxTest && optionMinTest) {
      isOptionANumber = true;
    } else {
      isOptionANumber = false;
    }
  }, [optionMax, optionMin]);

  const ConfirmHandler = () => {
    if (isOptionANumber) {
      setMaxSizeConnect(Math.floor(optionMax));
      setMinSizeConnect(Math.floor(optionMin));
      navigation.pop(1);
    } else {
      Alert.alert(
        'Erro', // title
        'Valor Inválido', // message
        [
          // buttons
          {
            // first button
            text: 'Ok',
            onPress: () => null,
            style: 'default',
          },
        ],
        {
          // options
          cancelable: true, // if its possible to press outside the alert to dismiss it
          onDismiss: () => null,
        }
      );
    }
  };

  return (
    <BackMenu pop={navigation.pop}>
      <View style={styles.container}>
        <Text style={styles.text}>Máximo de sílabas</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(text) => setOptionMax(text)}
          value={String(optionMax)}
        />
        <Text style={styles.text}>Mínimo de sílabas</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(text) => setOptionMin(text)}
          value={String(optionMin)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Confirmar" color="orange" onPress={ConfirmHandler} />
        </View>
      </View>
    </BackMenu>
  );
};

WordOptions.propTypes = {
  maxSize: PropTypes.number.isRequired,
  minSize: PropTypes.number.isRequired,

  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  setMaxSizeConnect: PropTypes.func.isRequired,
  setMinSizeConnect: PropTypes.func.isRequired,
};

const mapStateToProps = ({ randomWord }) => ({
  optionMax: randomWord.optionMax,
  optionMin: randomWord.optionMin,
  maxSize: randomWord.maxSize,
  minSize: randomWord.minSize,
});

const mapDispatchToProps = {
  setMaxSizeConnect: setMaxSize,
  setMinSizeConnect: setMinSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordOptions);
