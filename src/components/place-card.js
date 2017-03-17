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
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Villa_Medici_a_Fiesole_1.jpg/1200px-Villa_Medici_a_Fiesole_1.jpg' }} />
      <Text />
    </View>
    <View style={styles.infoBar}>
      <Text>{place.name}</Text>
    </View>
  </Card>
);

export default PlaceCard;
