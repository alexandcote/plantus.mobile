// @flow

import React, { Component } from 'react';
import { TextInput, Button, View, ViewStyle, Text } from 'react-native';
import { connect } from 'react-redux';
import { authActions } from '../redux/actions';
import colors from '../styles/colors';

const { logIn } = authActions;

const styles: {[key: string]: ViewStyle} = {
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
  input: {
    height: 40,
  },
  button: {
    height: 40,
  },
};

type PropTypes = {
  logIn: (email: string, password: string) => void
}

type FocusableInput = "email" | "password";

class Login extends Component {
  props: PropTypes;
  state = {};
  focused: FocusableInput = 'email';

  passwordInput: TextInput;
  constructor(props: PropTypes) {
    super(props);
    this.state = {};
  }

  focusNextInput = () => {
    if (this.focused === 'email') {
      this.passwordInput.focus();
    }
  }

  launchLogIn= () => {
    this.props.logIn(this.state.email, this.state.password);
  };

  render = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Foo</Text>
      <TextInput
          style={styles.input}
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          returnKeyType="next"
          onSubmitEditing={this.focusNextInput}
          onChangeText={email => this.setState({ email })} />
      <TextInput
          style={styles.input}
          ref={(input) => { this.passwordInput = input; }}
          placeholder="Password"
          secureTextEntry
          onSubmitEditing={this.launchLogIn}
          onChangeText={password => this.setState({ password })} />
      <Button
          style={styles.button}
          title="Sign In"
          onPress={this.launchLogIn} />
    </View>
  );
}

export default connect(null, {
  logIn,
})(Login);
