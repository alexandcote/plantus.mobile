// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 3,
  },
});

type PropTypes = {
  onPress: () => any,
  style?: ViewStyle,
  children?: any
}

const Card = ({ onPress, style, children }: PropTypes) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[styles.card, style]}>
      {children}
    </View>
  </TouchableNativeFeedback>
);

export default Card;
