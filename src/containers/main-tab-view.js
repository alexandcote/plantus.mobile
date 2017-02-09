// @flow
import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import PlantList from './plant-list';
import PlaceList from './place-list';
import colors from '../styles/colors';

const MainTabView = () => (
  <ScrollableTabView
      style={{ marginTop: 0, paddingTop: 0 }}
      tabBarTextStyle={{ fontSize: 16 }}
      tabBarUnderlineStyle={{ backgroundColor: colors.activateTabUnderlineColor }}
      tabBarActiveTextColor="white"
      tabBarInactiveTextColor="white">
    <PlantList tabLabel="Plant List" />
    <PlaceList tabLabel="Place List" />
  </ScrollableTabView>
);

export default MainTabView;
