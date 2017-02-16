// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import PlaceCard from '../components/place-card';
import { type Place } from '../types';
import { placeActions } from '../redux/actions';

const { loadPlaces } = placeActions;

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
    width: 240,
    height: 160,
    flexGrow: 1,
  },
});

type PropTypes = {
  style?: ViewStyle,
  loadPlaces: Function,
  places: Array<Place>
}

function renderRow(place: Place) {
  return (
    <PlaceCard
        key={place.id}
        style={styles.item}
        onClick={() => console.log(`clicked on ${place.name}`)}
        place={place} />
  );
}

function rowHasChanged(r1, r2) { return r1 !== r2; }

class PlaceList extends Component {
  state = {};
  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: ds,
    };
    props.loadPlaces();
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.places),
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={renderRow} />
      </View>
    );
  }
}

function mapStateToProps(state: { places: Array<Place> }) {
  return {
    places: state.places,
  };
}

export default connect(mapStateToProps, {
  loadPlaces,
})(PlaceList);
