// @flow

import { createAction } from './utils';

export const LOAD_PLACES_REQUEST = 'LOAD_PLACES_REQUEST';
export const LOAD_PLACES_SUCCESS = 'LOAD_PLACES_SUCCESS';
export const LOAD_PLACES_FAILURE = 'LOAD_PLACES_FAILURE';

export const loadPlaces = () => createAction(LOAD_PLACES_REQUEST);
export const loadPlacesSuccess = places => createAction(LOAD_PLACES_SUCCESS, places);
export const loadPlacesFailure = error => createAction(LOAD_PLACES_FAILURE, error);
