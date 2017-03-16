// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, StyleSheet, ViewStyle } from 'react-native';
import { Actions as nav } from 'react-native-router-flux';
import { Map } from 'immutable';

import PlantCard from '../../components/plant-card';
import PlusFab from '../../components/general/plus-fab';
import { Plant } from '../../types';
import { plantActions } from '../../redux/actions';
import { selectPlants } from '../../redux/selectors';
import colors from '../../styles/colors';
import { fabBottomRightStyle } from '../../styles';

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
  plants: Map<number, Plant>
}

function renderRow(plant: Plant) {
  return (
    <PlantCard
        key={plant.id}
        style={styles.item}
        onPress={() => console.log(`clicked on ${plant.name}`)}
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
  }

  componentDidMount() {
    this.props.loadPlants();
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.props.plants !== nextProps.plants) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.plants.toArray()),
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
            onPress={nav.newPlant}
            style={fabBottomRightStyle}
            bgColor={colors.colorPrimary}
            icColor={colors.colorAccent} />
      </View>
    );
  }
}

function mapStateToProps(state: { plants: Map<number, Plant> }) {
  return {
    plants: selectPlants(state),
  };
}

export default connect(mapStateToProps, {
  loadPlants,
})(PlantList);
