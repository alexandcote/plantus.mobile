// @flow
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import PlantList from './plant-list';
import PlaceList from './place-list';
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
    <PlaceList tabLabel="Places" />
  </ScrollableTabView>
);

export default Main;
