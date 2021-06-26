
import React from 'react';

import MainNavigator from './src/navegacion/MainNavigator';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
//import Splah1 from './src/vistas/Onboarding/Splash1';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;

/*
<View>
      <Text>Holas</Text>
    </View>

*/