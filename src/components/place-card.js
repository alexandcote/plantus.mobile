// @flow

import React from 'react';
import { View, Text, Image, ViewStyle, StyleSheet } from 'react-native';
import Card from './general/card';
import type Place from '../types/place';

const styles = StyleSheet.create({
  infoBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  infoText: {
    marginRight: 10,
  },
});

const PlaceCard = (props: { place: Place, onClick: Function, style: ViewStyle }) => (
  <Card onClick={props.onClick} style={[{ justifyContent: 'center' }, props.style]}>
    <View style={{ flex: 4 }}>
      <Image
          style={{ flex: 1, resizeMode: 'cover' }}
          source={{ uri: 'http://kingofwallpapers.com/villa/villa-004.jpg' }} />
      <Text />
    </View>
    <View style={styles.infoBar}>
      <Text style={styles.infoText}>Hum: {props.place.humidity}%</Text>
      <Text style={styles.infoText}>Temp: {props.place.temperature} C</Text>
      <Text style={styles.infoText}>Plants: {props.place.plants.length}</Text>
    </View>
  </Card>
);

export default PlaceCard;
