// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccc',
    elevation: 3,
  },
});

type PropTypes = {
  onClick: () => void,
  style?: ViewStyle,
  children?: any
}

const Card = ({ onClick, style, children }: PropTypes) => (
  <TouchableNativeFeedback onPress={onClick}>
    <View style={[styles.card, style]}>
      {children}
    </View>
  </TouchableNativeFeedback>
);

export default Card;
