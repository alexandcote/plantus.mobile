// @flow

import React from 'react';
import { Color } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

type PropTypes = {
  scale?: number,
  color?: Color,
};

const Thermometer = ({ scale = 1, color = '#000' }: PropTypes) => {
  const size = 300;
  const baseScale = 0.1;
  const realScale = scale * baseScale;
  const realSize = size * realScale;
  return (
    <Svg width={realSize} height={realSize}>
      <G scale={realScale}>
        <Path
            fill={color}
            d="m180.604,209.985v-176.819c0-18.316-14.682-33.166-33.001-33.166-18.316,
              0-32.999,14.85-32.999,33.166v176.819c-10,8.987-15.958,21.962-15.958,36.39 0,
              27.13 22.076,49.125 49.208,49.125 27.131,0 49-21.995 49-49.125
              0-14.428-6.25-27.402-16.25-36.39zm-33.001-193.985c9.374,0 17.001,7.701 17.001,
              17.166v15.334h-17v16h17v17h-17v16h17v17h-17v16h17v17h-34v-114.334c0-9.465
              7.626-17.166 16.999-17.166z" />
      </G>
    </Svg>
  );
};

export default Thermometer;
