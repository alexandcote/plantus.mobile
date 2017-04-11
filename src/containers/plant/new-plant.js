// @flow
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Container, Picker, Content } from 'native-base';
import { PlantType, Place, Plant } from '../../types';
import { selectPlantTypes, selectPlaces } from '../../redux/selectors';
import { placeActions, plantActions } from '../../redux/actions';
import dimens from '../../styles/dimens';

const { loadPlaces } = placeActions;
const { loadPlantTypes, addPlant } = plantActions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimens.defaultMargin,
    flexDirection: 'column',
  },
  input: {
    height: dimens.inputHeight,
  },
  button: {
    height: dimens.inputHeight,
    position: 'absolute',
    bottom: 0,
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
      identifier: '',
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
      identifier: this.state.identifier,
    };
    this.props.addPlant(plant);
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1 }}>
            <TextInput style={styles.input} placeholder="Name" onChangeText={name => this.setState({ name })} />
            <Picker
                mode="dropdown"
                iosHeader="Place"
                onValueChange={place => this.setState({ place })}
                selectedValue={this.state.place}>
              { this.props.places.toArray().map(place => (
                <Picker.Item key={place.id} label={place.name} value={place.id} />))
              }
            </Picker>
            <Picker
                mode="dropdown"
                iosHeader="Plant"
                onValueChange={plantType => this.setState({ plantType })}
                selectedValue={this.state.plantType}>
              { this.props.plantTypes.toArray().map(plantType => (
                <Picker.Item key={plantType.id} label={plantType.name} value={plantType.id} />))
              }
            </Picker>
            <TextInput
                style={styles.input}
                placeholder="Identifier"
                onChangeText={identifier => this.setState({ identifier })} />
          </View>
          <Button style={styles.button} title="Add Plant" onPress={this.addPlant} />
        </Content>
      </Container>
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
