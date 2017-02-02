// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccc',
    elevation: 3,
  },
});

const Card = (props: { onClick: Function, style?: ViewStyle, children?: any }) => (
  <View onClick={props.onClick} style={[styles.card, props.style]}>
    {props.children}
  </View>
);

export default Card;
