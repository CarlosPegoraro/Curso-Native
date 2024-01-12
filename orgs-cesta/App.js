import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Box } from './src/screen/Box/';

import { 
    useFonts, 
    Montserrat_400Regular, 
    Montserrat_700Bold 
  } from '@expo-google-fonts/montserrat';

import mock from './src/mocks/Box';
export default function App() {

  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Box {...mock}/>
    </SafeAreaView>
  );
}
