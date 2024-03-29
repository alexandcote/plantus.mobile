// @flow

import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Button, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { placeActions, userActions } from '../../redux/actions';
import { type Place, User } from '../../types';
import PersonItem from '../../components/user-item';
import CheckableList from '../../components/general/checkable-list';

import dimens from '../../styles/dimens';

const { addPlace } = placeActions;
const { loadUsers } = userActions;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    marginBottom: dimens.defaultMargin,
    height: dimens.inputHeight,
  },
});

type PropTypes = {
  addPlace: (place: Place) => void,
  loadUsers: () => void,
  users: Array<User>,
};

class NewPlace extends Component {
  state = {};
  ownersCheckableList: CheckableList;

  constructor(props: PropTypes) {
    super(props);
    this.state = {
      name: '',
      identifier: '',
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(this.props.loadUsers);
  }

  savePlace = () => {
    const owners = Array.from(this.ownersCheckableList.getCheckedItems()).map(user => user.id);
    const place: Place = {
      name: this.state.name,
      owners,
      identifier: this.state.identifier,
    };
    this.props.addPlace(place);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => this.setState({ name: text })} />
        <TextInput
            style={styles.input}
            placeholder="Identifier"
            onChangeText={identifier => this.setState({ identifier })} />

        <Text style={{ marginLeft: 5 }}>Owners</Text>
        <CheckableList
            ref={list => { this.ownersCheckableList = list; }}
            items={this.props.users}
            renderRow={obj => <PersonItem key={obj.item.id} user={obj.item} />} />
        <Button title="Add Place" onPress={this.savePlace} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { loadUsers, addPlace })(NewPlace);
