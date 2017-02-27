// @flow

import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle, TouchableNativeFeedback } from 'react-native';
import { MKCheckbox } from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  left: {
    flexGrow: 1,
  },
  right: {
  },
});

type PropTypes = {
  children?: any,
  onChange: (checked: boolean) => void,
  style?: ViewStyle,
};

type OnCheckedChangeParam = {
  checked: boolean,
}

class CheckableWrapper extends Component {
  props: PropTypes;
  checkBox: MKCheckbox;

  render() {
    return (
      <TouchableNativeFeedback onPress={() => this.checkBox.confirmToggle()}>
        <View style={[styles.container, this.props.style]}>
          <View style={styles.left}>
            {this.props.children}
          </View>
          <View style={styles.right}>
            <MKCheckbox
                ref={(input) => { this.checkBox = input; }}
                onCheckedChange={(value: OnCheckedChangeParam) =>
                    this.props.onChange(value.checked)} />
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default CheckableWrapper;
