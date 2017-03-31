// @flow

import React, { Component } from 'react';
import { View, ListView, StyleSheet, ViewStyle, Image } from 'react-native';
import { Actions as nav } from 'react-native-router-flux';
import { Map } from 'immutable';

import PlaceCard from '../components/place-card';
import PlusFab from '../components/general/plus-fab';
import { type Place } from '../types';
import colors from '../styles/colors';
import dimens from '../styles/dimens';
import { fabBottomRightStyle } from '../styles';
import GridList from '../components/general/grid-list';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  item: {
    height: 160,
    flexGrow: 1,
    flex: 1,
    margin: dimens.defaultMargin,
  },
});

type PropTypes = {
  style?: ViewStyle,
  places: Map<number, Place>,
  onPlacePress: (place: Place) => any,
}

class PlaceList extends Component {
  state = {};
  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      places: props.places.toArray(),
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (nextProps.places !== this.props.places) {
      this.setState({
        places: nextProps.places.toArray(),
      });
    }
  }

  renderRow = (place: Place) => (
    <PlaceCard
        key={place.id}
        style={styles.item}
        onPress={() => this.props.onPlacePress(place)}
        place={place} />
  );

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 0 }}>
        <View style={[styles.container, this.props.style]}>
          <GridList
              columns={1}
              enableEmptySections
              contentContainerStyle={styles.list}
              items={this.state.places}
              renderItem={this.renderRow} />
        </View>
        <PlusFab
            style={fabBottomRightStyle}
            bgColor={colors.colorPrimary}
            icColor={colors.colorAccent}
            onPress={nav.newPlace} />
      </View>
    );
  }
}

export default PlaceList;
