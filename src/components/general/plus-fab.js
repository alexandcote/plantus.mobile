// @flow

import React from 'react';
import { ViewStyle, View } from 'react-native';
import { MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

type PropTypes = {
    onPress: () => void,
    bgColor: any,
    icColor: any,
    style?: ViewStyle
};

const PlusFab = ({ onPress, bgColor, icColor, style }: PropTypes) => {
  const Fab = MKButton.coloredFab()
                    .withBackgroundColor(bgColor)
                    .withOnPress(onPress)
                    .build();
  return (
    <View style={[{ backgroundColor: 'transparent', padding: 5 }, style]}>
      <Fab>
        <Icon name="plus" size={30} color={icColor} />
      </Fab>
    </View>
  );
};

export default PlusFab;

