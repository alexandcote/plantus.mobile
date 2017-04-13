// @flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { List } from 'immutable';

type PropTypes = {
    items: Array<any>,
    columns: number,
    renderItem: (item: any) => any,
    renderHeader?: () => any,
    onRefresh?: () => any,
    refreshing?: boolean,
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
  },
});

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
    this.state = {
      rows,
      refreshing: false,
    };
  }

  componentWillReceiveProps(nextProps: PropTypes) {
    this.setState({
      refreshing: false,
    });
    if (this.props.items !== nextProps.items) {
      const rows = splitItems(nextProps.items, this.props.columns);
      this.setState({
        rows,
      });
    }
  }

  renderRow = (group: List<any>) => {
    const items = group.map(item => this.props.renderItem(item)).asMutable();
    const key = items.reduce((a, b) => a + b.key, '');
    while (items.size < this.props.columns) {
      items.push(<View key={-1} style={[items.get(0).props.style, { opacity: 0 }]} />);
    }
    return (
      <View key={key} style={{ flex: 1, flexDirection: 'row' }}>
        { items }
      </View>
    );
  }

  refresh() {
    console.log(this.props.onRefresh);
    this.setState({
      refreshing: true,
    });
    this.props.onRefresh();
  }

  render() {
    return (
      <FlatList
          contentContainerStyle={styles.list}
          ListHeaderComponent={this.props.renderHeader}
          renderItem={obj => this.renderRow(obj.item)}
          data={this.state.rows}
          keyExtractor={row => row.reduce((a, b) => a + b.id, '')} />
    );
  }
}
