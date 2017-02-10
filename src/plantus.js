// @flow

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Navigator, ViewStyle } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './redux/reducers';
import MainTabView from './containers/main-tab-view';
import Login from './containers/login';
import colors from './styles/colors';

import sagas from './sagas';

import { getToken } from './services/jwt';

const RouterWithRedux = connect()(Router);

const sagaMiddleware = createSagaMiddleware();

const store = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)(createStore)(reducers);

sagaMiddleware.run(sagas);

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
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

const token = getToken();

const Plantus = () => (
  <Provider store={store}>
    <RouterWithRedux getSceneStyle={getSceneStyle} navigationBarStyle={{ backgroundColor: colors.colorPrimary }}>
      <Scene key="root">
        <Scene key="login" component={Login} title="PlantUS" initial />
        <Scene key="mainTabView" component={MainTabView} title="PlantUS" />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Plantus;
