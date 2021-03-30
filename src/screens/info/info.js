import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import rnIcon from '../../../assets/RN.png';

export const Info = () => (
  <View style={styles.screen}>
    <Image source={rnIcon} style={{ width: 200, height: 200 }} />
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
    paddingTop: 25,
    height: '100%',
  },
  textContainer: { alignItems: 'center', paddingTop: 10 },
  title: { color: '#2089DC' },
});
