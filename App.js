import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <AppNavigation />
    </>
  );
};

export default App;
