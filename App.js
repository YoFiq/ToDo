/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const App: () => Node = () => (
  <SafeAreaView>
    <StatusBar barStyle="dark-content" />
  </SafeAreaView>
);

const styles = StyleSheet.create({});

export default App;
