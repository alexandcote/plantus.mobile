// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Tabs, Tab } from 'native-base';

import MainPlacesList from './place/main-places-list';
import MainPlantList from './plant/main-plant-list';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: colors.colorPrimary,
  },
  tabViewUnderline: {
    backgroundColor: colors.activeTabUnderlineColor,
  },
});

const Main = () => (
  <Tabs>
    <Tab heading="Plants">
      <MainPlantList />
    </Tab>
    <Tab heading="Places">
      <MainPlacesList />
    </Tab>
  </Tabs>
);

export default Main;
