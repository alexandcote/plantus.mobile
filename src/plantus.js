// @flow
/* eslint-disable react/prop-types */

import React from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';
import { Navigator, ViewStyle } from 'react-native';
import { connect, Provider } from 'react-redux';
import MainTabView from './containers/main-tab-view';
import Login from './containers/login';
import Splash from './containers/splash';
import colors from './styles/colors';
import store from './redux/store';
import httpClient from './services/http-client';

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

const activeScene = (props) => {
  if (props.initializing) {
    return 'splash';
  }
  if (props.jwt) {
    return 'mainTabView';
  }
  return 'login';
};

const mapRootStateToProps = state => ({
  initializing: state.initializing,
  jwt: state.session.jwt,
});

const rootComponent = connect(mapRootStateToProps)(Switch);

const Plantus = () => (
  <Provider store={store}>
    <RouterWithRedux
        getSceneStyle={getSceneStyle}
        navigationBarStyle={{ backgroundColor: colors.colorPrimary }}>
      <Scene
          key="root"
          component={rootComponent}
          unmountScenes
          tabs
          selector={activeScene}>
        <Scene key="splash" component={Splash} hideNavBar />
        <Scene key="login" component={Login} title="PlantUS" />
        <Scene key="mainTabView" component={MainTabView} title="PlantUS" />
      </Scene>
    </RouterWithRedux>
  </Provider>
);


export default Plantus;
