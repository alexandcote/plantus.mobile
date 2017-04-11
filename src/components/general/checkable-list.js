// @flow

import React, { Component } from 'react';
import { ListView, StyleSheet, FlatList } from 'react-native';

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

export default class CheckableList extends Component {
  state: StateTypes;
  checkedItems: Set<any> = new Set();
  initialListSize: number;
  
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
      <FlatList
          style={styles.list}
          renderItem={this.renderRow}
          data={this.props.items} />
    );
  }
}
