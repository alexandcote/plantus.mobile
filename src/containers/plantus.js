// @flow

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, Navigator } from 'react-native';

import PlantList from './plant-list';

const Plantus = () => (
  <Router sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight }}>
    <Scene key="blob">
      <Scene key="plantList" component={PlantList} title="Plant List" initial />
      <Scene key="blob" component={PlantList} title="Plant List" />
    </Scene>
  </Router>
);

export default Plantus;
