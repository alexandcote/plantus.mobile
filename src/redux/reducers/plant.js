// @flow
import { Map } from 'immutable';
import { plantActions } from '../actions';
import { Plant } from '../../types';

export default function reducer(state: Map<number, Plant> = Map(), action: Object) {
  switch (action.type) {
    case plantActions.LOAD_PLANTS_SUCCESS:
      return Map(action.plants.map(plant => [plant.id, plant]));
    case plantActions.ADD_PLANT_SUCCESS:
      return state.set(action.plant.id, action.plant);
    case plantActions.PATCH_PLANT_SUCCESS:
      return state.set(action.plant.id, action.plant);
    default:
      return state;
  }
}
