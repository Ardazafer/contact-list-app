import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <StoreProvider store={store}>
      <StatusBar barStyle="default" />
      <AppNavigation />
    </StoreProvider>
  );
};

export default App;
