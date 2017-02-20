import React from 'react';
import { View, Text, ViewStyle, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const styles: { [key: string ]: ViewStyle } = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'white',
  },
});

const Splash = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Plantus</Text>
  </View>
);

export default Splash;
