import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainMenu from './MenuScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
