// @flow

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { MKCheckbox } from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  left: {
    flexGrow: 1,
  },
  right: {
  },
});

type PropTypes = {
  children?: any,
  onChange: (checked: boolean) => void,
  style?: ViewStyle,
};

type OnCheckedChangeParam = {
  checked: boolean,
}

const CheckableWrapper = ({ children, onChange, style }: PropTypes) => (
  <View style={[styles.container, style]}>
    <View style={styles.left}>
      {children}
    </View>
    <View style={styles.right}>
      <MKCheckbox onCheckedChange={(value: OnCheckedChangeParam) => onChange(value.checked)} />
    </View>
  </View>
);

export default CheckableWrapper;
