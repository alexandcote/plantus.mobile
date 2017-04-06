// @flow
/* eslint-disable react/prop-types */

import React from 'react';
import { Navigator, ViewStyle } from 'react-native';
import { connect, Provider } from 'react-redux';
import { setTheme, MKColor } from 'react-native-material-kit';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Splash from './containers/splash';
import Main from './containers/main';
import NewPlace from './containers/place/new-place';
import NewPlant from './containers/plant/new-plant';
import Login from './containers/login';
import PlaceDetail from './containers/place/place-detail';
import PlantDetail from './containers/plant/plant-detail';
import PlantImageStep from './containers/plant/plant-image-step';

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
  const style: ViewStyle = {
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
    <Scene hideNavBar={false} key="placeDetail" component={PlaceDetail} title="Place Detail" />
    <Scene hideNavBar={false} key="plantDetail" component={PlantDetail} title="Plant Detail" />
    <Scene hideNavBar key="plantImageStep" component={PlantImageStep} title="Plant Image" />
  </Scene>,
);

const Plantus = () => (
  <Provider store={store}>
    <RouterWithRedux
        scenes={scenes}
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styles.navBar}
        titleStyle={{ color: colors.colorAccent }} />
  </Provider>
);

export default Plantus;
