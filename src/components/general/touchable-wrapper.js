// @flow

import React from 'react';
import { TouchableNativeFeedback, TouchableHighlight, Platform, ViewStyle } from 'react-native';

type propTypes = {
  onPress: () => any,
  style?: ViewStyle,
  children: any,
};

const TouchableWrapper = ({ onPress, style, children }: propTypes) => {
  if (Platform.OS === 'ios') {
    return <TouchableHighlight style={style} underlayColor="#ddd" onPress={onPress}>{children}</TouchableHighlight>;
  }
  return <TouchableNativeFeedback style={style} onPress={onPress}>{children}</TouchableNativeFeedback>;
};

export default TouchableWrapper;
