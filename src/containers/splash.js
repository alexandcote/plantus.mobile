// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions as nav } from 'react-native-router-flux';

import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorPrimary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.colorAccent,
    fontSize: 40,
  },
});

type PropTypes = {
  jwt: string,
  initializing: boolean,
  authReady: boolean,
};

class Splash extends Component {
  props: PropTypes;

  navIfReady() {
    const { initializing, authReady, jwt } = this.props;

    const showLogin = () => nav.login({ type: 'reset' });

    if (!initializing) {
      if (authReady) {
        if (jwt) {
          nav.main({ type: 'reset' });
        } else {
          showLogin();
        }
      }
    }
  }

  componentDidMount() {
    this.navIfReady();
  }

  componentDidUpdate() {
    this.navIfReady();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>PlantUS</Text>
      </View>
    );
  }
}

export default connect(state => ({
  jwt: state.session.jwt,
  initializing: state.init.initializing,
  authReady: state.init.authReady,
}))(Splash);
