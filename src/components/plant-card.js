// @flow

import React from 'react';
import { View, Text, Image, ViewStyle } from 'react-native';
import Card from './general/card';
import type PlantInfo from '../types/PlantInfo';

const PlantCard = (props: { plantInfo: PlantInfo, onClick: Function, style: ViewStyle }) => (
  <Card onClick={props.onClick} style={props.style}>
    <View style={{ flex: 4 }}>
      <Image
        style={{ flex: 1, resizeMode: 'cover' }}
        source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/23/00/12/sun-flower-1536088_640.jpg' }} />
      <Text />
    </View>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={{ flex: 1 }}>Hum: {props.plantInfo.humidity}%</Text>
      <Text style={{ flex: 1 }}>Temp: {props.plantInfo.temperature} C</Text>
    </View>
  </Card>
);

export default PlantCard;
