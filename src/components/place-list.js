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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 50,
  },
  item: {
    width: 240,
    height: 160,
    flexGrow: 1,
    margin: dimens.defaultMargin,
  },
});

type PropTypes = {
  style?: ViewStyle,
  places: Map<number, Place>,
  onPlacePress: (place: Place) => any,
}

function rowHasChanged(r1, r2) { return r1 !== r2; }

class PlaceList extends Component {
  state = {};
  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);
    const data = props.places ? props.places.toArray() : [];
    const ds = new ListView.DataSource({ rowHasChanged })
        .cloneWithRows(data);
    this.state = {
      dataSource: ds,
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.props.places !== nextProps.places) {
      const data = nextProps.places ? nextProps.places.toArray() : [];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
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
          <ListView
              enableEmptySections
              contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow} />
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
