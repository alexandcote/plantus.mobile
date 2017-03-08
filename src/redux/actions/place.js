// @flow

import { createAction } from './utils';
import { Place } from '../../types';

export const LOAD_PLACES_REQUEST = 'LOAD_PLACES_REQUEST';
export const LOAD_PLACES_SUCCESS = 'LOAD_PLACES_SUCCESS';
export const LOAD_PLACES_FAILURE = 'LOAD_PLACES_FAILURE';

export const ADD_PLACE_REQUEST = 'ADD_PLACE_REQUEST';
export const ADD_PLACE_SUCCESS = 'ADD_PLACE_SUCCESS';
export const ADD_PLACE_ERROR = 'ADD_PLACE_ERROR';

export const loadPlaces =
    () => createAction(LOAD_PLACES_REQUEST);
export const loadPlacesSuccess =
    (places: Array<Place>) => createAction(LOAD_PLACES_SUCCESS, { places });
export const loadPlacesFailure =
    (error: string) => createAction(LOAD_PLACES_FAILURE, { error });

export const addPlace = (place: Place) => createAction(ADD_PLACE_REQUEST, { place });
export const addPlaceSuccess = (place: Place) => createAction(ADD_PLACE_SUCCESS, { place });
export const addPlaceError = (error: string) => createAction(ADD_PLACE_ERROR, { error });
