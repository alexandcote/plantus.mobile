// @flow

import React from 'react';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import PlantCard from '../components/plant-card';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const plantInfo = {
  name: 'test',
  temperature: 25,
  humidity: 95,
};

const plantInfo2 = {
  name: 'test',
  temperature: 25,
  humidity: 95,
};

const plantInfo3 = {
  name: 'test',
  temperature: 25,
  humidity: 95,
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    margin: 10,
    width: 140,
    flexGrow: 1,
    height: 140,
  },
});

const Row = planInfo => (
  <PlantCard style={styles.item} onClick={() => console.log(`clicked on ${plantInfo.name}`)} plantInfo={planInfo} />
);

const PlantList = (props: {style?: ViewStyle}) => (
  <View style={[{ flex: 1, backgroundColor: '#0b8' }, props.style]}>
    <ListView
      contentContainerStyle={styles.list}
      dataSource={ds.cloneWithRows([plantInfo, plantInfo2, plantInfo3])}
      renderRow={Row} />
  </View>
);

export default PlantList;
