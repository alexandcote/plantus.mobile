// @flow
import { Map } from 'immutable';
import { plantActions } from '../actions';
import { Plant } from '../../types';

export default function reducer(state: Map<number, Plant> = Map(), action: Object) {
  switch (action.type) {
    case plantActions.LOAD_PLANTS_SUCCESS:
      return Map(action.plants.map(plant => [plant.id, plant]));
    default:
      return state;
  }
}
