// @flow
import { Set } from 'immutable';
import { operationActions } from '../actions';

export default function reducer(state: Set<number> = Set(), action: Object) {
  switch (action.type) {
    case operationActions.LOAD_PLANTS_WATERING_SUCCESS:
      return action.plantIds;
    case operationActions.WATER_PLANT_REQUEST:
      return state.add(action.plantId);
    default:
      return state;
  }
}
