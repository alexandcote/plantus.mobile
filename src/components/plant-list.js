// @flow

import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Actions as nav } from 'react-native-router-flux';
import { Map } from 'immutable';

import PlantCard from './plant-card';
import GridList from '../components/general/grid-list';
import PlusFab from './general/plus-fab';
import { Plant } from '../types';
import colors from '../styles/colors';
import { fabBottomRightStyle } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  item: {
    flex: 1,
    margin: 10,
    width: 100,
    height: 160,
    flexGrow: 1,
  },
});

type PropTypes = {
  style?: ViewStyle,
  plants: Map<number, Plant>,
  onPlantClick: (plant: Plant) => any,
  renderHeader?: any,
  onRefresh?: () => any,
}

export default class PlantList extends Component {
  state = {};
  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);
    this.state = {
      plants: props.plants,
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.props.plants !== nextProps.plants) {
      this.setState({
        plants: nextProps.plants,
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
          <GridList
              onRefresh={this.props.onRefresh}
              columns={2}
              items={this.state.plants.toArray()}
              renderItem={this.renderRow}
              renderHeader={this.props.renderHeader} />
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
