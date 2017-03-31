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
    flex: 1,
    padding: dimens.defaultMargin,
    flexDirection: 'row',
  },
});

type PropTypes = {
  style?: ViewStyle,
  name: string,
  value: string,
  icon?: any,
};

const Info = ({ name, value, style, icon }: PropTypes) => (
  <View style={[styles.container, style]}>
    <View style={styles.name}>
      <View>{icon}</View>
      <Text>{name}</Text>
    </View>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default Info;
