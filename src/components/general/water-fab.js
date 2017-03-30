// @flow

import React from 'react';
import { ViewStyle, View } from 'react-native';
import { MKButton } from 'react-native-material-kit';
import WaterIcon from './droplets-icon';

type PropTypes = {
    onPress: () => void,
    bgColor: any,
    icColor: any,
    style?: ViewStyle
};

const WaterFab = ({ onPress, bgColor, icColor, style }: PropTypes) => {
  const Fab = MKButton.coloredFab()
                    .withBackgroundColor(bgColor)
                    .withOnPress(onPress)
                    .build();
  return (
    <View style={[{ backgroundColor: 'transparent', padding: 5 }, style]}>
      <Fab>
        <WaterIcon scale={0.3} />
      </Fab>
    </View>
  );
};

export default WaterFab;
