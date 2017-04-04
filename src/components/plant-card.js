// @flow

import React from 'react';
import { View, Text, Image, ViewStyle, StyleSheet } from 'react-native';
import Card from './general/card';
import type Plant from '../types/plant';
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
  plant: Plant,
  style: ViewStyle,
  onPress: () => any,
};

const PlantCard = ({ plant, onPress, style }: PropTypes) => (
  <Card onPress={onPress} style={style}>
    <View style={{ flex: 4 }}>
      <Image
          style={{ flex: 1, resizeMode: 'cover' }}
          source={{ uri: plant.picture }} />
      <Text />
    </View>
    <View style={styles.infoBar}>
      <Text>{plant.name}</Text>
    </View>
  </Card>
);

export default PlantCard;
