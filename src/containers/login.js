// @flow

import React, { Component } from 'react';
import { TextInput, Button, View, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import { authActions } from '../redux/actions';

const { logIn } = authActions;

const styles: {[key: string]: ViewStyle} = {
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
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
    console.log(this.state.email);
    this.props.logIn(this.state.email, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={email => this.setState({ email })} />
        <TextInput onChangeText={password => this.setState({ password })} />
        <Button title="Log In" onPress={this.launchLogIn} />
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
