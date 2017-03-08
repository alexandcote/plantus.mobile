// @flow

import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';

import CheckableWrapper from './checkable-wrapper';

const styles = StyleSheet.create({
  list: {
  },
});

type PropTypes = {
  items: Array<any>,
  renderRow: (any) => any,
};

type StateTypes = {
  dataSource: ListView.DataSource,
};

const rowHasChanged = (r1, r2) => r1 !== r2;

export default class CheckableList extends Component {
  state: StateTypes;
  checkedItems: Set<any> = new Set();
  initialListSize: number;

  constructor(props: PropTypes) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged }).cloneWithRows(props.items);
    this.initialListSize = props.items.length;
    this.state = {
      dataSource: ds,
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.items),
    });
  }

  getCheckedItems = (): Set<any> => this.checkedItems;

  setItemState(item: any, checked: boolean) {
    if (checked) {
      this.checkedItems.add(item);
    } else {
      this.checkedItems.delete(item);
    }
  }

  renderRow = (item: any) => {
    const row = this.props.renderRow(item);
    return (
      <CheckableWrapper key={row.key} onChange={checked => this.setItemState(item, checked)}>
        {row}
      </CheckableWrapper>
    );
  };

  render() {
    return (
      <ListView
          enableEmptySections
          initialListSize={this.initialListSize}
          contentContainerStyle={styles.list}
          renderRow={this.renderRow}
          dataSource={this.state.dataSource} />
    );
  }
}
