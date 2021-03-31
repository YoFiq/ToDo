import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import rnIcon from '../../../assets/RN.png';
import { NetworkDetector } from '../../services/network-detector';

export const About = () => (
  <View style={styles.screen}>
    <NetworkDetector />
    <Image source={rnIcon} style={{ width: 200, height: 200, paddingTop: 25 }} />
    <View style={styles.textContainer}>
      <Text h4 style={styles.title}>
        Description
      </Text>
      <Text style={{ fontSize: 16 }}>To Do List React Native App with offline support</Text>
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.title}>Created by</Text>
      <Text>Andrii Terletskyi</Text>
    </View>

    <Text />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  textContainer: { alignItems: 'center', paddingTop: 10 },
  title: { color: '#2089DC' },
});
