import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuScreen from '../screens/MenuScreen';
import Dice from '../screens/Dice';
import Bright from '../screens/Bright';
import RandomWord from '../screens/RandomWord';
import LoginScreen from '../screens/loginScreen';
import WordOptions from '../screens/WordOptions';

const AppStack = createStackNavigator();

const AppMenuNavigator = ({ token }) => (
  <NavigationContainer>
    {token ? (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Menu" component={MenuScreen} />
        <AppStack.Screen name="Bright" component={Bright} />
        <AppStack.Screen name="Dice" component={Dice} />
        <AppStack.Screen name="RWord" component={RandomWord} />
        <AppStack.Screen name="RWordOp" component={WordOptions} />
      </AppStack.Navigator>
    ) : (
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    )}
  </NavigationContainer>
);

AppMenuNavigator.propTypes = {
  token: PropTypes.string,
};

AppMenuNavigator.defaultProps = {
  token: '',
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(AppMenuNavigator);
