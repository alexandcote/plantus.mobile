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

const PlantCard = (props: { plant: Plant, onClick: Function, style: ViewStyle }) => (
  <Card onClick={props.onClick} style={props.style}>
    <View style={{ flex: 4 }}>
      <Image
          style={{ flex: 1, resizeMode: 'cover' }}
          source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/23/00/12/sun-flower-1536088_640.jpg' }} />
      <Text />
    </View>
    <View style={styles.infoBar}>
      <Text>{props.plant.name}</Text>
    </View>
  </Card>
);

export default PlantCard;
