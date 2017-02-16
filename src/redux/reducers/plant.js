// @flow
import { plantActions } from '../actions';
import { Plant } from '../../types';

export default function reducer(state: Array<Plant> = [], action: Object) {
  switch (action.type) {
    case plantActions.LOAD_PLANTS_SUCCESS:
      return action.plants;
    default:
      return state;
  }
}
