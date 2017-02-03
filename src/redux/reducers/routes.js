// @flow

import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

export default function reducer(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };

    // ...other actions

    default:
      return state;
  }
}
