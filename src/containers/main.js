// @flow
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import PlantList from './plant-list';
import PlaceList from './place-list';
import Login from './login';
import colors from '../styles/colors';

import NewPlace from './new-place';

const MainTabView = TabNavigator({
  Plants: {
    screen: PlantList,
    navigationOptions: {
      tabBar: {
        label: 'Plants',
      },
    },
  },
  Places: {
    screen: PlaceList,
    navigationOptions: {
      tabBar: {
        label: 'Places',
      },
    },
  },
}, {
  initialRouteName: 'Plants',
  tabBarOptions: {
    activeBackgroundColor: colors.colorPrimary,
    inactiveBackgroundColor: colors.colorPrimary,
    style: {
      backgroundColor: colors.colorPrimary,
    },
  },
});

type PropTypes = {
  jwt: string,
  initializing: boolean,
  authReady: boolean,
};

const Main = ({ jwt, initializing, authReady }: PropTypes) => {
  if (initializing || (!authReady && jwt)) {
    return <ActivityIndicator />;
  }
  if (jwt) {
    return <NewPlace />;
  }
  return <Login />;
};

export default connect(state => ({
  jwt: state.session.jwt,
  initializing: state.init.initializing,
  authReady: state.init.authReady,
}))(Main);
