// @flow

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type PropTypes = {
  scale?: number,
};

const Droplets = ({ scale = 1 }: PropTypes) => {
  const baseScale = 0.3;
  const size = 100;
  const realScale = scale * baseScale;
  const realSize = size * realScale;
  return (
    <Svg width={realSize} height={realSize}>
      <G scale={realScale}>
        <Path
            fill="#030104"
            d="M19.777,0.465c-0.076-0.62-1.098-0.62-1.174,0C16.051,21.041,3,25.28,3,39.58
                c0,8.836,7.412,15.998,16.189,15.998c8.781,0,16.191-7.162,16.191-15.998C35.381,25.28,22.33,21.041,19.777,0.465z M81.398,0.465
                c-0.078-0.62-1.098-0.62-1.176,0C77.672,21.041,64.621,25.28,64.621,39.58c0,8.836,7.41,15.998,16.191,15.998
                C89.59,55.578,97,48.416,97,39.58C97,25.28,83.951,21.041,81.398,0.465z M49.414,44.888C46.861,65.465,33.81,69.702,33.81,84.002
                C33.811,92.838,41.221,100,50,100s16.189-7.162,16.189-15.998c0-14.3-13.049-18.537-15.602-39.114
                C50.51,44.267,49.492,44.267,49.414,44.888z" />
      </G>
    </Svg>
  );
};

export default Droplets;
