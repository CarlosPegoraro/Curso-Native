import React from 'react';

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Home from './src/screens/home/index'

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="#20AAFF00"/>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})