// @flow

import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { placeActions, userActions } from '../redux/actions';
import { type Place, User } from '../types';
import PersonItem from '../components/user-item';
import CheckableList from '../components/general/checkable-list';

const { addPlace } = placeActions;
const { loadUsers } = userActions;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

type PropTypes = {
  addPlace: (place: Place) => void,
  loadUsers: () => void,
  users: Array<User>,
};

class NewPlace extends Component {
  static navigationOptions = {
    title: 'New Place',
  };

  state = {};
  ownersCheckableList: CheckableList;

  constructor(props: PropTypes) {
    super(props);
    this.state = {
      name: '',
      owners: [],
    };
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  savePlace = () => {
    console.log(Array.from(this.ownersCheckableList.getCheckedItems()));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Name"
            onChangeText={text => this.setState({ name: text })} />

        <Text style={{ marginLeft: 5 }}>Owners</Text>
        <CheckableList
            ref={list => { this.ownersCheckableList = list; }}
            items={this.props.users}
            renderRow={user => <PersonItem key={user.id} user={user} />} />
        <Button title="Save" onPress={this.savePlace} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { loadUsers })(NewPlace);
