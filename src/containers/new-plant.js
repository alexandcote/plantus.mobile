// @flow
import React, { Component } from 'react';
import { View, TextInput, Picker, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { PlantType, Place, Plant } from '../types';
import { selectPlantTypes, selectPlaces } from '../redux/selectors';
import { placeActions, plantActions } from '../redux/actions';
import dimens from '../styles/dimens';

const { loadPlaces } = placeActions;
const { loadPlantTypes, addPlant } = plantActions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimens.defaultMargin,
    flexDirection: 'column',
  },
  button: {
  },
});

type PropTypes = {
  plantTypes: Map<number, PlantType>,
  places: Map<number, Place>,
  loadPlaces: () => void,
  loadPlantTypes: () => void,
  addPlant: (plant: Plant) => void,
};

class NewPlant extends Component {
  props: PropTypes;
  state = {};

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      name: '',
      plantType: null,
      place: null,
    };
  }

  componentDidMount() {
    this.props.loadPlaces();
    this.props.loadPlantTypes();
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.state.place === null) {
      if (!nextProps.places.isEmpty()) {
        this.setState({ place: nextProps.places.first().id });
      }
    }
    if (this.state.plantType === null) {
      if (!nextProps.plantTypes.isEmpty()) {
        this.setState({ plantType: nextProps.plantTypes.first().id });
      }
    }
  }

  addPlant = () => {
    const plant = {
      name: this.state.name,
      place: this.state.place,
      plant: this.state.plantType,
    };
    this.props.addPlant(plant);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TextInput placeholder="Name" onChangeText={name => this.setState({ name })} />
          <Picker
              onValueChange={place => this.setState({ place })}
              selectedValue={this.state.place}>
            { this.props.places.toArray().map(place => (
              <Picker.Item key={place.id} label={place.name} value={place.id} />))
            }
          </Picker>
          <Picker
              onValueChange={plantType => this.setState({ plantType })}
              selectedValue={this.state.plantType}>
            { this.props.plantTypes.toArray().map(plantType => (
              <Picker.Item key={plantType.id} label={plantType.name} value={plantType.id} />))
            }
          </Picker>
        </View>
        <Button style={{ position: 'absolute', bottom: 0 }} title="Add Plant" onPress={this.addPlant} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: selectPlaces(state),
  plantTypes: selectPlantTypes(state),
});

export default connect(
  mapStateToProps, {
    loadPlaces,
    loadPlantTypes,
    addPlant,
  })(NewPlant);
