// @flow

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Color } from 'react-native';

type PropTypes = {
  scale?: number,
  color?: Color,
};

const Sun = ({ scale = 1, color = '#000' }: PropTypes) => {
  const baseScale = 0.0586;
  const size = 512;
  const realScale = scale * baseScale;
  const realSize = size * realScale;
  return (
    <Svg width={realSize} height={realSize}>
      <G scale={realScale}>
        <Path d="M377.139 259.492c0 66.637-54.020 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658 0-66.637 54.020-120.658 120.658-120.658 66.637 0 120.658 54.020 120.658 120.658z" fill={color} />
        <Path d="M228.352 100.669l30.27-77.906 25.979 77.906z" fill={color} />
        <Path d="M228.352 411.341l30.27 77.895 25.979-77.895z" fill={color} />
        <Path d="M100.659 287.601l-77.895-30.29 77.895-25.959z" fill={color} />
        <Path d="M411.361 287.601l77.875-30.29-77.875-25.959z" fill={color} />
        <Path d="M126.597 165.703l-33.659-76.472 73.442 36.7z" fill={color} />
        <Path d="M346.276 385.423l76.524 33.639-36.741-73.442z" fill={color} />
        <Path d="M168.499 388.199l-76.493 33.639 36.72-73.442z" fill={color} />
        <Path d="M388.199 168.499l33.618-76.513-73.4 36.751z" fill={color} />
      </G>
    </Svg>
  );
};

export default Sun;

