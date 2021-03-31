import React from 'react';
import { useIsConnected } from 'react-native-offline';
import { View, Text, StyleSheet } from 'react-native';

export const NetworkDetector = () => {
  const isConnected = useIsConnected();

  const NetWorkDownSign = () => (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}> App is Offline. Please reconnect for syncing! </Text>
    </View>
  );

  return <>{!isConnected && <NetWorkDownSign />}</>;
};

const styles = StyleSheet.create({
  offlineContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#c3852b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offlineText: { color: '#fff', fontSize: 16 },
});
