//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MenuScreen from './screens/MenuScreen';
import Dice from './screens/Dice';
import Bright from './screens/Bright';

export default function App() {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('black')
  return (
    <View style={styles.container}>
      <AppMenu />
    </View>
  );
}

const MenuNavigator = createSwitchNavigator({
  Menu: MenuScreen,
  Dice,
  Bright,

}, {
  initialRouteName: 'Menu',
})

const AppMenu = createAppContainer(MenuNavigator)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
