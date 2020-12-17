//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import store from './redux/store'
import AppMenuNavigator from "./components/AppMenuNavigator";


export default function App() {
  // set status bar to black
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('black')

  const [isLogged, setIsLogged] = useState(false)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppMenuNavigator isLogged={isLogged} setIsLogged={setIsLogged} />
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
