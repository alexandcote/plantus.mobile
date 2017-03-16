import { Actions as nav } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import React, { Component } from 'react';
import { type Place } from '../../types';
import PlaceList from '../../components/place-list';
import { placeActions } from '../../redux/actions';
import { selectPlaces } from '../../redux/selectors';

const { loadPlaces } = placeActions;

type PropTypes = {
  places: Map<number, Place>,
  requestLoadPlaces: () => any,
};

class MainPlaceList extends Component {
  props: PropTypes;

  componentDidMount() {
    this.props.requestLoadPlaces();
  }

  render() {
    return (
      <PlaceList places={this.props.places} onPlacePress={place => nav.placeDetail({ place })} />
    );
  }
}

export default connect(state => ({
  places: selectPlaces(state),
}), {
  requestLoadPlaces: loadPlaces,
})(MainPlaceList);

