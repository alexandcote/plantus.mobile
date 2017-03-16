// @flow

import React from 'react';
import { View, Text, Image, ViewStyle, StyleSheet } from 'react-native';
import Card from './general/card';
import type Place from '../types/place';
import dimens from '../styles/dimens';

const styles = StyleSheet.create({
  infoBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: dimens.defaultMargin,
  },
});

type PropTypes = {
  place: Place,
  onPress: () => any,
  style: ViewStyle
};

const PlaceCard = ({ place, onPress, style }: PropTypes) => (
  <Card onPress={onPress} style={[{ justifyContent: 'center' }, style]}>
    <View style={{ flex: 4 }}>
      <Image
          style={{ flex: 1, resizeMode: 'cover' }}
          source={{ uri: 'http://kingofwallpapers.com/villa/villa-004.jpg' }} />
      <Text />
    </View>
    <View style={styles.infoBar}>
      <Text>{place.name}</Text>
    </View>
  </Card>
);

export default PlaceCard;
