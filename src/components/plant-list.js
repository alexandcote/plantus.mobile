// @flow

import React, { Component } from 'react';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import { Actions as nav } from 'react-native-router-flux';
import { Map } from 'immutable';

import PlantCard from './plant-card';
import PlusFab from './general/plus-fab';
import { Plant } from '../types';
import colors from '../styles/colors';
import { fabBottomRightStyle } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    margin: 10,
    width: 160,
    height: 160,
    flexGrow: 1,
  },
});

type PropTypes = {
  style?: ViewStyle,
  plants: Map<number, Plant>,
  onPlantClick: (plant: Plant) => any,
}

function rowHasChanged(r1, r2) { return r1 !== r2; }

export default class PlantList extends Component {
  state = {};
  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged }).cloneWithRows(props.plants.toArray());
    this.state = {
      dataSource: ds,
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.props.plants !== nextProps.plants) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.plants.toArray()),
      });
    }
  }

  renderRow = (plant: Plant) => (
    <PlantCard
          key={plant.id}
          style={styles.item}
          onPress={() => this.props.onPlantClick(plant)}
          plant={plant} />
);

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 0 }}>
        <View style={[styles.container, this.props.style]}>
          <ListView
              contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow} />
        </View>
        <PlusFab
            onPress={nav.newPlant}
            style={fabBottomRightStyle}
            bgColor={colors.colorPrimary}
            icColor={colors.colorAccent} />
      </View>
    );
  }
}
