import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getRandomWord } from '../api';
import BackMenu from '../components/BackMenu';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    paddingBottom: '30%',
    fontSize: 25,
  },
  button: {
    position: 'absolute',
    bottom: '25%',
    alignSelf: 'center',
  },
  buttonO: {
    position: 'absolute',
    bottom: '3%',
    alignSelf: 'flex-end',
    borderEndWidth: 10,
  },
});

class RandomWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    };
  }

  getWordHandler = async () => {
    const { maxSize, minSize } = this.props;
    let word = '';
    try {
      word = await getRandomWord(maxSize, minSize);
    } catch (error) {
      Alert.alert(
        'Erro', // title
        error.message, // message
        [{ text: 'Ok', style: 'default' }],
        { cancelable: true }
      );
    }
    this.setState({ word });
  };

  render() {
    const { navigation } = this.props;
    const { word } = this.state;

    return (
      <BackMenu pop={navigation.pop}>
        <View style={styles.container}>
          <Text style={styles.text}>{word}</Text>
          <View style={styles.button}>
            <Button title="     Criar     " onPress={this.getWordHandler} color="red" />
          </View>
          <View style={styles.buttonO}>
            <Button title="Opções" color="orange" onPress={() => navigation.navigate('RWordOp')} />
          </View>
        </View>
      </BackMenu>
    );
  }
}

RandomWord.defaultProps = {
  maxSize: 5,
  minSize: 2,
};

RandomWord.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
};

const mapStateToProps = (state) => ({
  word: state.randomWord.word,
  maxSize: state.randomWord.maxSize,
  minSize: state.randomWord.minSize,
});

export default connect(mapStateToProps)(RandomWord);
