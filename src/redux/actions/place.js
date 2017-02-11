// @flow

import { createAction, createRequestAction } from './utils';
import { Place } from '../../types';

export const LOAD_PLACES_REQUEST = 'LOAD_PLACES_REQUEST';
export const LOAD_PLACES_SUCCESS = 'LOAD_PLACES_SUCCESS';
export const LOAD_PLACES_FAILURE = 'LOAD_PLACES_FAILURE';

export const loadPlaces =
    () => createRequestAction(LOAD_PLACES_REQUEST, true);
export const loadPlacesSuccess =
    (places: Array<Place>) => createAction(LOAD_PLACES_SUCCESS, { places });
export const loadPlacesFailure =
    (error: string) => createAction(LOAD_PLACES_FAILURE, { error });
