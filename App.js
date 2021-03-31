/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NetworkProvider } from 'react-native-offline';
import { AppTabScreen } from './src/navigation/navigation';

const App: () => Node = () => (
  <NavigationContainer>
    <NetworkProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#e6e6ea" />
      <AppTabScreen />
    </NetworkProvider>
  </NavigationContainer>
);

export default App;
