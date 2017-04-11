// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowRadius: 2,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.4,
  },
});

type PropTypes = {
  onPress: () => any,
  style?: ViewStyle,
  children?: any
}

const Card = ({ onPress, style, children }: PropTypes) => (
  <TouchableHighlight style={[styles.card, style]} underlayColor="#ddd" onPress={onPress}>
    <View style={{ flex: 1 }} >
      {children}
    </View>
  </TouchableHighlight>
);

export default Card;
