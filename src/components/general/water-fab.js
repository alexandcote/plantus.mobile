// @flow

import React from 'react';
import { ViewStyle, View } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import { WaterDrop } from './icons';

type PropTypes = {
    onPress?: () => void,
    bgColor?: any,
    icColor?: any,
    style?: ViewStyle
};

const defaultColor = MKColor.Blue;

const WaterFab = ({ onPress, bgColor = defaultColor, icColor, style }: PropTypes) => {
  const Fab = MKButton.coloredFab()
                    .withBackgroundColor(bgColor)
                    .withOnPress(onPress)
                    .build();
  return (
    <View style={[{ backgroundColor: 'transparent', padding: 5 }, style]}>
      <Fab>
        <WaterDrop color={icColor} scale={0.8} />
      </Fab>
    </View>
  );
};

export default WaterFab;
