// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import TouchableWrapper from './touchable-wrapper';

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
  <TouchableWrapper style={[styles.card, style]} onPress={onPress}>
    <View style={{ flex: 1 }} >
      {children}
    </View>
  </TouchableWrapper>
);

export default Card;
