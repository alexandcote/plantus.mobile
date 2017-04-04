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

  componentDidMount() {
    this.plants = this.props.getPlants(this.props.place.id);
  }

  renderHeader = () => (
    <Image
        source={{ uri: this.props.place.picture }}
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
