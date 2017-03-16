// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import MainPlacesList from './place/main-places-list';
import PlantList from './plant/plant-list';
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
  <ScrollableTabView
      style={styles.tabView}
      tabBarActiveTextColor={colors.colorAccent}
      tabBarInactiveTextColor={colors.colorAccent}
      tabBarUnderlineStyle={styles.tabViewUnderline}>
    <PlantList tabLabel="Plants" />
    <MainPlacesList tabLabel="Places" />
  </ScrollableTabView>
);

export default Main;
