/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabScreen } from './src/navigation/navigation';

const App: () => Node = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <AppTabScreen />
  </NavigationContainer>
);

export default App;
