// @flow

import React from 'react';
import { Color } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

type PropTypes = {
  scale?: number,
  color?: Color,
};

const WaterDrop = ({ scale = 1, color = '#000' }: PropTypes) => {
  const size = 847.372;
  const baseScale = 0.3 * (100 / size);
  const realScale = scale * baseScale;
  const realSize = size * realScale;
  return (
    <Svg width={realSize} height={realSize}>
      <G scale={realScale}>
        <Path
            fill={color}
            d="M406.269,10.052l-232.65,405.741c-48.889,85.779-52.665,194.85,0,286.697c79.169,138.07,255.277,185.82,393.348,106.65
              c138.071-79.169,185.821-255.276,106.651-393.348L440.968,10.052C433.283-3.351,413.953-3.351,406.269,10.052z" />
      </G>
    </Svg>
  );
};

export default WaterDrop;
