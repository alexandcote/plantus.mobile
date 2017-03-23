// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { type Plant, type Spec } from '../../types';
import Info from '../../components/general/info';
import dimens from '../../styles/dimens';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 25,
    padding: dimens.defaultMargin,
  },
  container: {
    padding: dimens.containerPadding,
    borderTopWidth: dimens.dividerThickness,
    borderBottomWidth: dimens.dividerThickness,
    borderTopColor: colors.divider,
    borderBottomColor: colors.divider,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
});

type PropTypes = {
    plant: Plant,
};

function prepareSpec(spec: Spec): Spec {
  if (!spec) spec = {};
  spec.humidity = spec.humidity ? `${spec.humidity} %` : 'N/A';
  spec.temperature = spec.temperature ? `${spec.temperature} °C` : 'N/A';
  spec.luminosity = spec.luminosity ? `${spec.luminosity}` : 'N/A';
  spec.waterLevel = spec.waterLevel ? `${spec.waterLevel}` : 'N/A';
  return spec;
}

const PlantDetail = ({ plant }: PropTypes) => {
  const spec = prepareSpec(plant.spec);
  return (
    <View style={{ flex: 1 }}>
      <Image
          style={styles.image}
          source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/23/00/12/sun-flower-1536088_640.jpg' }} />
      <Text style={styles.title}>Plant Information</Text>
      <View style={styles.container}>
        <Info name="Name" value={plant.name} />
        <Info name="Humidity" value={spec.humidity} />
        <Info name="Temperature" value={spec.temperature} />
        <Info name="Luminosity" value={spec.luminosity} />
        <Info name="Water Level" value={spec.waterLevel} />
      </View>
    </View>
  );
};

export default PlantDetail;
