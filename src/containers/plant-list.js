// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import PlantCard from '../components/plant-card';
import { type Plant } from '../types';
import { plantActions } from '../redux/actions';

const { loadPlants } = plantActions;

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
    width: 160,
    height: 160,
    flexGrow: 1,
  },
});

type PropTypes = {
  style?: ViewStyle,
  loadPlants: Function,
  plants: Array<Plant>
}

function renderRow(plant: Plant) {
  return (
    <PlantCard
        key={plant.id}
        style={styles.item}
        onClick={() => console.log(`clicked on ${plant.name}`)}
        plant={plant} />
  );
}

function rowHasChanged(r1, r2) { return r1 !== r2; }

class PlantList extends Component {
  state = {};
  props: PropTypes;

  constructor(props: PropTypes) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: ds,
    };
    props.loadPlants();
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.plants),
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

function mapStateToProps(state: { plants: Array<Plant> }) {
  return {
    plants: state.plants,
  };
}

export default connect(mapStateToProps, {
  loadPlants,
})(PlantList);
