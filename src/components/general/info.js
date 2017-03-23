// @flow

import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import dimens from '../../styles/dimens';

const styles = StyleSheet.create({
  name: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  value: {
    flex: 1,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  container: {
    padding: dimens.defaultMargin,
    flexDirection: 'row',
  },
});

type PropTypes = {
  style?: ViewStyle,
  name: string,
  value: string,
};

const Info = ({ name, value, style }: PropTypes) => (
  <View style={[styles.container, style]}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default Info;
