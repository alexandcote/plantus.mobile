// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import store from './redux/store';
import MainNavigator from './routing/main-navigator';

class Root extends Component {
  render() {
    return (
      <MainNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })} />
    );
  }
}

const ConnectedNavigator = connect(state => ({ nav: state.nav }))(Root);

const Plantus = () => (
  <Provider store={store}>
    <ConnectedNavigator />
  </Provider>
);

export default Plantus;
