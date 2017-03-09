// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import { MKButton } from 'react-native-material-kit';
import { Actions as nav } from 'react-native-router-flux';
import { Map } from 'immutable';

import PlaceCard from '../components/place-card';
import PlusFab from '../components/general/plus-fab';
import { type Place } from '../types';
import { placeActions } from '../redux/actions';
import { selectPlaces } from '../redux/selectors';
import colors from '../styles/colors';
import dimens from '../styles/dimens';
import { fabBottomRightStyle } from '../styles';

const { loadPlaces } = placeActions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
  loadPlaces: Function,
  navigation: any,
  places: Map<number, Place>,
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
  }

  componentDidMount() {
    this.props.loadPlaces();
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.props.places !== nextProps.places) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.places.toArray()),
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 0 }}>
        <View style={[styles.container, this.props.style]}>
          <ListView
              contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={renderRow} />
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

function mapStateToProps(state: { places: Array<Place> }) {
  return {
    places: selectPlaces(state),
  };
}

export default connect(mapStateToProps, {
  loadPlaces,
})(PlaceList);
