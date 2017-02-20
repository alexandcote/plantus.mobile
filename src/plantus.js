// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';
import { Navigator, ViewStyle } from 'react-native';
import { connect, Provider } from 'react-redux';
import MainTabView from './containers/main-tab-view';
import Login from './containers/login';
import colors from './styles/colors';
import store from './redux/store';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style: ViewStyle = {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };

  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0
      : Navigator.NavigationBar.Styles.General.TotalNavHeight - 2;
  }

  return style;
};

class Plantus extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux
            getSceneStyle={getSceneStyle}
            navigationBarStyle={{ backgroundColor: colors.colorPrimary }}>
          <Scene
              key="root"
              component={connect(state => ({ jwt: state.session.jwt }))(Switch)}
              unmountScenes
              tabs
              selector={props => (props.jwt ? 'mainTabView' : 'login')}>
            <Scene key="login" component={Login} title="PlantUS" />
            <Scene key="mainTabView" component={MainTabView} title="PlantUS" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default Plantus;
