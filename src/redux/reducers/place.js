// @flow
import { placeActions, Action } from '../actions';
import { Place } from '../../types';

export default function reducer(state: Array<Place> = [], action: Action) {
  switch (action.type) {
    case placeActions.LOAD_PLACES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
