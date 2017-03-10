// @flow
import { Map } from 'immutable';
import { plantActions } from '../actions';
import { PlantType } from '../../types';

export default function reducer(state: Map<number, PlantType> = Map(), action: Object) {
  switch (action.type) {
    case plantActions.LOAD_PLANT_TYPES_SUCCESS:
      return Map(action.plantTypes.map(plantType => [plantType.id, plantType]));
    default:
      return state;
  }
}
