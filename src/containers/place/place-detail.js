// @flow

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Map } from 'immutable';

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

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Image
            source={{ uri: 'http://kingofwallpapers.com/villa/villa-004.jpg' }}
            style={{ flex: 1, resizeMode: 'contain' }} />
      </View>
    );
  }
}

export default connect(state => ({
  getPlants: (placeId: number) => selectPlantsForPlace(state, placeId),
}))(PlaceDetail);
