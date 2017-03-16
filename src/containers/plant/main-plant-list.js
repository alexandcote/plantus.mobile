// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as nav } from 'react-native-router-flux';
import { Map } from 'immutable';

import { Plant } from '../../types';
import { plantActions } from '../../redux/actions';
import { selectPlants } from '../../redux/selectors';

import PlantList from '../../components/plant-list';

const { loadPlants } = plantActions;

type PropTypes = {
  plants: Map<number, Plant>,
  requestLoadPlants: () => any,
};

class MainPlantList extends Component {
  props: PropTypes;

  componentDidMount() {
    this.props.requestLoadPlants();
  }

  render() {
    return <PlantList plants={this.props.plants} onPlantClick={plant => console.log(plant)} />;
  }
}

function mapStateToProps(state) {
  return {
    plants: selectPlants(state),
  };
}

export default connect(mapStateToProps, {
  requestLoadPlants: loadPlants,
})(MainPlantList);
