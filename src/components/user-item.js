// @flow

import React from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';

import { type User } from '../types';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    height: 50,
    borderRadius: 25,
    width: 50,
    backgroundColor: '#ccc',
    marginRight: 20,
  },
  name: {

  },
});

type PropTypes = {
  user: User,
  style?: ViewStyle,
};

const UserItem = ({ user, style }: PropTypes) => (
  <View style={[styles.item, style]}>
    <View style={styles.picture} />
    <View style={styles.name}>
      <Text>{`${user.firstName} ${user.lastName}`}</Text>
    </View>
  </View>
);

export default UserItem;
