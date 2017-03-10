// @flow
/* eslint-disable react/prop-types */

import React from 'react';
import { Navigator } from 'react-native';
import { connect, Provider } from 'react-redux';
import { setTheme, MKColor } from 'react-native-material-kit';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Splash from './containers/splash';
import Main from './containers/main';
import NewPlace from './containers/new-place';
import NewPlant from './containers/new-plant';
import Login from './containers/login';

import store from './redux/store';
import colors from './styles/colors';

setTheme({
  primaryColor: colors.colorPrimary,
  accentColor: colors.colorAccent,
  checkboxStyle: {
    fillColor: MKColor.Green,
    borderOnColor: MKColor.Green,
    borderOffColor: '#69696C',
    rippleColor: `${MKColor.Green}26`,
  },
});

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar
        ? 0
        : Navigator.NavigationBar.Styles.General.TotalNavHeight - 2;
  }
  return style;
};

const styles = {
  navBar: {
    backgroundColor: colors.colorPrimary,
    elevation: 0,
    marginBottom: 0,
    borderWidth: 0,
  },
};

const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
  <Scene key="root">
    <Scene initial hideNavBar key="splash" component={Splash} />
    <Scene hideNavBar key="login" component={Login} title="Plantus" />
    <Scene hideNavBar={false} key="main" component={Main} title="Plantus" />
    <Scene hideNavBar={false} key="newPlace" component={NewPlace} title="New Place" />
    <Scene hideNavBar={false} key="newPlant" component={NewPlant} title="New Plant" />
  </Scene>,
);

const Plantus = () => (
  <Provider store={store}>
    <RouterWithRedux
        scenes={scenes}
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styles.navBar} />
  </Provider>
);

export default Plantus;
