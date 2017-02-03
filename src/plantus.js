// @flow

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Navigator } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './redux/reducers';
import PlantList from './containers/plant-list';

const RouterWithRedux = connect()(Router);

const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware),
)(createStore)(reducers);

const toolbarHeight = Navigator.NavigationBar.Styles.General.TotalNavHeight;

const Plantus = () => (
  <Provider store={store}>
    <RouterWithRedux sceneStyle={{ paddingTop: toolbarHeight }}>
      <Scene key="blob">
        <Scene key="plantList" component={PlantList} title="Plant List" initial />
        <Scene key="blob" component={PlantList} title="Plant List" />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Plantus;
