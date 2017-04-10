// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { type Plant, type Spec } from '../../types';
import Info from '../../components/general/info';
import dimens from '../../styles/dimens';
import colors from '../../styles/colors';
import WaterFab from '../../components/general/water-fab';
import { Droplets, Thermometer, Sun, WaterLevel } from '../../components/general/icons';

import { operationActions } from '../../redux/actions';

const { loadPlantsWatering, waterPlant } = operationActions;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 25,
  },
  container: {
    margin: dimens.containerPadding,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  fab: {
    alignSelf: 'flex-end',
    margin: dimens.fabMargin,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type PropTypes = {
    plant: Plant,
    canWater: boolean,
    waterPlant: () => void,
    checkIfWatering: () => void,
};

function prepareSpec(spec: Spec): Spec {
  const newSpec = {};
  if (!spec) spec = {};
  newSpec.humidity = spec.humidity ? `${spec.humidity} %` : 'N/A';
  newSpec.temperature = spec.temperature ? `${spec.temperature} °C` : 'N/A';
  newSpec.luminosity = spec.luminosity ? `${spec.luminosity}` : 'N/A';
  newSpec.waterLevel = spec.waterLevel ? `${spec.waterLevel}` : 'N/A';
  return newSpec;
}

const renderInfo = (name: string, value: string, icon: () => any) => (
  <View style={styles.infoRow}>
    {icon()}
    <Info name={name} value={value} />
  </View>
);

class PlantDetail extends Component {
  props: PropTypes;

  componentDidMount() {
    this.props.checkIfWatering();
  }

  render = () => {
    const spec = prepareSpec(this.props.plant.spec);
    const fabColor = this.props.canWater ? colors.waterFabColor : colors.fabDisabled;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
              style={styles.image}
              source={{ uri: this.props.plant.picture }} />
          <View style={styles.container}>
            <Text style={styles.title}>Sensors</Text>
            {renderInfo('Humidity', spec.humidity, () => <Droplets scale={0.8} />)}
            {renderInfo('Temperature', spec.temperature, () => <Thermometer scale={0.8} />)}
            {renderInfo('Luminosity', spec.luminosity, () => <Sun scale={0.8} />)}
            {renderInfo('Water Level', spec.waterLevel, () => <WaterLevel scale={0.8} />)}
          </View>
        </View>
        <WaterFab style={styles.fab} icColor="#fff" bgColor={fabColor} onPress={this.props.waterPlant} />
      </View>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  canWater: !state.plantsWatering.contains(ownProps.plant.id),
});

const mapActionsToDispatch = (dispatch, ownProps) => ({
  checkIfWatering: () => dispatch(loadPlantsWatering()),
  waterPlant: () => dispatch(waterPlant(ownProps.plant.id)),
});

export default connect(mapStateToProps, mapActionsToDispatch)(PlantDetail);
