// @flow
import { Map } from 'immutable';
import { placeActions } from '../actions';
import { Place } from '../../types';

export default function reducer(state: Map<number, Place> = Map(), action: Object) {
  switch (action.type) {
    case placeActions.LOAD_PLACES_SUCCESS:
      return Map(action.places.map(place => [place.id, place]));
    default:
      return state;
  }
}
