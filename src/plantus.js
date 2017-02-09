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
import colors from './styles/colors';

import sagas from './sagas';

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

const Plantus = () => (
  <Provider store={store}>
    <RouterWithRedux getSceneStyle={getSceneStyle} navigationBarStyle={{ backgroundColor: colors.colorPrimary }}>
      <Scene key="blob">
        <Scene key="mainTabView" component={MainTabView} title="PlantUS" initial />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Plantus;
