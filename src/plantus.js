// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import { setTheme, MKColor } from 'react-native-material-kit';

import store from './redux/store';
import MainNavigator from './routing/main-navigator';
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
