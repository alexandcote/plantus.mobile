// @flow

import React from 'react';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import PlantCard from '../components/plant-card';
import PlantsMock from './plants-mock';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

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

const Row = plantInfo => (
  <PlantCard style={styles.item} onClick={() => console.log(`clicked on ${plantInfo.name}`)} plantInfo={plantInfo} />
);

const PlantList = (props: {style?: ViewStyle}) => (
  <View style={[{ flex: 1, backgroundColor: '#0b8' }, props.style]}>
    <ListView
      contentContainerStyle={styles.list}
      dataSource={ds.cloneWithRows(PlantsMock)}
      renderRow={Row} />
  </View>
);

export default PlantList;
