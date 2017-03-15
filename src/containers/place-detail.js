// @flow

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { type Place, type Plant } from '../types';

const styles = StyleSheet.create({
  title: {

  },
});

type PropTypes = {
  place: Place,
  loadPlants: (plantId: number) => void,
};

const PlaceDetail = (props: PropTypes) => (
  <View>
    <View>
      <Image />
    </View>
  </View>
);
