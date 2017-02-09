// @flow
import { plantActions, Action } from '../actions';
import { Plant } from '../../types';

export default function reducer(state: Array<Plant> = [], action: Action) {
  switch (action.type) {
    case plantActions.LOAD_PLANTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
