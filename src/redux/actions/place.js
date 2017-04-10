// @flow

import { createAction } from './utils';
import { Place } from '../../types';

export const LOAD_PLACES_REQUEST = 'LOAD_PLACES_REQUEST';
export const LOAD_PLACES_SUCCESS = 'LOAD_PLACES_SUCCESS';
export const LOAD_PLACES_FAILURE = 'LOAD_PLACES_FAILURE';

export const ADD_PLACE_REQUEST = 'ADD_PLACE_REQUEST';
export const ADD_PLACE_SUCCESS = 'ADD_PLACE_SUCCESS';
export const ADD_PLACE_ERROR = 'ADD_PLACE_ERROR';

export const PATCH_PLACE_REQUEST = 'PATCH_PLACE_REQUEST';
export const PATCH_PLACE_SUCCESS = 'PATCH_PLACE_SUCCESS';
export const PATCH_PLACE_FAILURE = 'PATCH_PLACE_FAILURE';

export const PLACE_IMAGE_STEP_REQUEST = 'PLACE_IMAGE_STEP_REQUEST';
export const PLACE_IMAGE_STEP_SUCCESS = 'PLACE_IMAGE_STEP_SUCCESS';
export const PLACE_IMAGE_STEP_FAILURE = 'PLACE_IMAGE_STEP_FAILURE';

export const loadPlaces =
    () => createAction(LOAD_PLACES_REQUEST);
export const loadPlacesSuccess =
    (places: Array<Place>) => createAction(LOAD_PLACES_SUCCESS, { places });
export const loadPlacesFailure =
    (error: string) => createAction(LOAD_PLACES_FAILURE, { error });

export const addPlace = (place: Place) => createAction(ADD_PLACE_REQUEST, { place });
export const addPlaceSuccess = (place: Place) => createAction(ADD_PLACE_SUCCESS, { place });
export const addPlaceError = (error: string) => createAction(ADD_PLACE_ERROR, { error });

export const patchPlace = (placeId: number, place: Place) =>
    createAction(PATCH_PLACE_REQUEST, { placeId, place });
export const patchPlaceSuccess = (place: Place) => createAction(PATCH_PLACE_SUCCESS, { place });
export const patchPlaceFailure = (error: string) => createAction(PATCH_PLACE_FAILURE, { error });

export const placeImageStep = (placeId: number, image: any) =>
    createAction(PLACE_IMAGE_STEP_REQUEST, { placeId, image });
export const placeImageStepSuccess = (place: Place) =>
    createAction(PLACE_IMAGE_STEP_SUCCESS, { place });
export const placeImageStepFailure = (error: string) =>
    createAction(PLACE_IMAGE_STEP_FAILURE, { error });
