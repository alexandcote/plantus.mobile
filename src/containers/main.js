// @flow
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import PlantList from './plant-list';
import PlaceList from './place-list';
import Login from './login';
import colors from '../styles/colors';

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
};

const Main = ({ jwt }: PropTypes) => {
  if (!jwt) {
    return <Login />;
  }
  return <MainTabView />;
};

export default connect(state => ({
  jwt: state.session.jwt,
}))(Main);
