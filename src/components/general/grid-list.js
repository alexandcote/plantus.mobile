// @flow

import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { List } from 'immutable';

type PropTypes = {
    items: Array<any>,
    columns: number,
    renderItem: (item: any) => any,
    renderHeader?: () => any,
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
  },
});

function rowHasChanged(r1, r2) { return r1 !== r2; }

function splitItems(items: Array<any>, columns: number) {
  if (!items) {
    return [];
  }
  return List(items)
      .groupBy((value, index) => Math.floor((index / columns))).toArray();
}

export default class GridList extends Component {
  props: PropTypes;
  state = {};

  constructor(props: PropTypes) {
    super(props);
    const rows = splitItems(this.props.items, this.props.columns);
    const ds = new ListView.DataSource({ rowHasChanged })
        .cloneWithRows(rows);
    this.state = {
      dataSource: ds,
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    if (this.props.items !== nextProps.items) {
      const rows = splitItems(nextProps.items, this.props.columns);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(rows),
      });
    }
  }

  renderRow = (group: List<any>) => {
    const items = group.map(item => this.props.renderItem(item)).asMutable();
    const key = items.reduce((a, b) => a + b.key, '');
    while (items.size < this.props.columns) {
      items.push(<View style={[items.get(0).props.style, { opacity: 0 }]} />);
    }
    return (
      <View key={key} style={{ flex: 1, flexDirection: 'row' }}>
        { items }
      </View>
    );
  }

  render() {
    return (
      <ListView
          enableEmptySections
          contentContainerStyle={styles.list}
          renderHeader={this.props.renderHeader}
          renderRow={this.renderRow}
          dataSource={this.state.dataSource} />
    );
  }
}
