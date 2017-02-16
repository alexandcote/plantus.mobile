// @flow
import { placeActions } from '../actions';
import { Place } from '../../types';

export default function reducer(state: Array<Place> = [], action: Object) {
  switch (action.type) {
    case placeActions.LOAD_PLACES_SUCCESS:
      return action.places;
    default:
      return state;
  }
}
