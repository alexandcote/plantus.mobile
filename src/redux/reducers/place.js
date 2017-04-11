// @flow
import { Map } from 'immutable';
import { placeActions } from '../actions';
import { Place } from '../../types';

export default function reducer(state: Map<number, Place> = Map(), action: Object) {
  switch (action.type) {
    case placeActions.LOAD_PLACES_SUCCESS:
      return Map(action.places.map(place => [place.id, place]));
    case placeActions.ADD_PLACE_SUCCESS:
      return state.set(action.place.id, action.place);
    case placeActions.PATCH_PLACE_SUCCESS:
      return state.set(action.place.id, action.place);
    default:
      return state;
  }
}
