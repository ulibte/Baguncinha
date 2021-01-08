import PropTypes from 'prop-types';
import React from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { logOff } from '../redux/actionCreators';

const buttonStyle = {
  paddingHorizontal: 30,
  paddingVertical: 20,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'black',
    flexGrow: 1,
  },
  item: {
    // flexGrow: 1,
    // flexShrink: 2,
    // padding: 29,
    ...buttonStyle,
  },
  logOff: {
    ...buttonStyle,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

function MenuScreen({ navigation, logOffHandler }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logOff}>
        <Button color="orange" title="Deslogar" onPress={logOffHandler} />
      </View>
      <View style={styles.item}>
        <Button color="#A72300" title="Brilho" onPress={() => navigation.navigate('Bright')} />
      </View>
      <View style={styles.item}>
        <Button color="#A72300" title="Dado" onPress={() => navigation.navigate('Dice')} />
      </View>
      <View style={styles.item}>
        <Button
          color="#A72300"
          title="Palavra Aleatória"
          onPress={() => navigation.navigate('RWord')}
        />
      </View>
    </ScrollView>
  );
}

MenuScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  logOffHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logOffHandler: logOff,
};

export default connect(undefined, mapDispatchToProps)(MenuScreen);
