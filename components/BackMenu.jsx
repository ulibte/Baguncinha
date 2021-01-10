import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  vScreen: {
    flexGrow: 1,
    backgroundColor: 'black',
    paddingTop: StatusBar.currentHeight,
  },
});

const BackMenu = ({ pop, children }) => (
  <View style={styles.vScreen}>
    <BackButton pop={pop} />
    {children}
  </View>
);

BackMenu.defaultProps = {
  children: <View />,
};

BackMenu.propTypes = {
  pop: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default BackMenu;
