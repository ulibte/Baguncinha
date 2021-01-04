//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import AppMenuNavigator from "./components/AppMenuNavigator";
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {
  // set status bar to black
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('black')

  const [isLogged, setIsLogged] = useState(false)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <AppMenuNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
