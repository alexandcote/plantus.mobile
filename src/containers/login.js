// @flow

import React, { Component } from 'react';
import { TextInput, Button, View, ViewStyle, Text } from 'react-native';
import { connect } from 'react-redux';
import { authActions } from '../redux/actions';

const { logIn } = authActions;

const styles: {[key: string]: ViewStyle} = {
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
};

type PropTypes = {
  logIn: (email: string, password: string) => void
}

class Login extends Component {
  state = {};
  props: PropTypes;

  constructor(props) {
    super(props);
    this.state = {};
  }

  launchLogIn= () => {
    this.props.logIn(this.state.email, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            keyboardType="email-address"
            placeholder="foo"
            onChangeText={email => this.setState({ email })} />
        <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={password => this.setState({ password })} />
        <Button
            title="Sign In" onPress={this.launchLogIn} />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, {
  logIn,
})(Login);
