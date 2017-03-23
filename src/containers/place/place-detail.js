// @flow

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Actions as nav } from 'react-native-router-flux';

import PlantList from '../../components/plant-list';
import { selectPlantsForPlace } from '../../redux/selectors';
import { type Place, type Plant } from '../../types';

const styles = StyleSheet.create({
  title: {

  },
});

type PropTypes = {
  place: Place,
  getPlants: (plantId: number) => Map<number, Plant>,
};

class PlaceDetail extends Component {
  props: PropTypes;
  plants: Map<number, Plant>;

  constructor(props: PropTypes) {
    super(props);
    this.plants = props.getPlants(props.place.id);
    console.log(this.plants.toArray());
  }

  renderHeader = () => (
    <Image
        source={{ uri: 'http://kingofwallpapers.com/villa/villa-004.jpg' }}
        style={{ resizeMode: 'cover', height: 200 }} />
  );

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <PlantList
            plants={this.props.getPlants(this.props.place.id)}
            onPlantClick={plant => console.log(plant)}
            renderHeader={this.renderHeader} />
      </View>
    );
  }
}

export default connect(state => ({
  getPlants: (placeId: number) => selectPlantsForPlace(state, placeId),
}))(PlaceDetail);
