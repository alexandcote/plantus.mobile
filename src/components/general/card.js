// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccc',
    elevation: 3,
  },
});

const Card = (props: { onClick: Function, style?: ViewStyle, children?: any }) => (
  <TouchableNativeFeedback onPress={props.onClick}>
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  </TouchableNativeFeedback>
);

export default Card;
