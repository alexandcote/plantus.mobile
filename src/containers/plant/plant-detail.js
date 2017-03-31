// @flow
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { type Plant, type Spec } from '../../types';
import Info from '../../components/general/info';
import dimens from '../../styles/dimens';
import colors from '../../styles/colors';
import WaterFab from '../../components/general/water-fab';
import { Droplets, Thermometer, Sun, WaterLevel } from '../../components/general/icons';

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
    alignItems: 'center' 
  },
});

type PropTypes = {
    plant: Plant,
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

const PlantDetail = ({ plant }: PropTypes) => {
  const spec = prepareSpec(plant.spec);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
            style={styles.image}
            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/23/00/12/sun-flower-1536088_640.jpg' }} />
        <View style={styles.container}>
          <Text style={styles.title}>Sensors</Text>
          {renderInfo('Humidity', spec.humidity, () => <Droplets scale={0.8} />)}
          {renderInfo('Temperature', spec.temperature, () => <Thermometer scale={0.8} />)}
          {renderInfo('Luminosity', spec.luminosity, () => <Sun scale={0.8} />)}
          {renderInfo('Water Level', spec.waterLevel, () => <WaterLevel scale={0.8} />)}
        </View>
      </View>
      <WaterFab style={styles.fab} icColor="#fff" />
    </View>
  );
};

export default PlantDetail;
