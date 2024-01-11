import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Box } from './src/screen/Box/';

import { 
    useFonts, 
    Montserrat_400Regular, 
    Montserrat_700Bold 
  } from '@expo-google-fonts/montserrat';

export default function App() {

  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar/>
      <Box/>
    </SafeAreaView>
  );
}
