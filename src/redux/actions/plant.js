import { createAction } from './utils';

export const LOAD_PLANTS_REQUEST = 'LOAD_PLANTS_REQUEST';
export const LOAD_PLANTS_SUCCESS = 'LOAD_PLANTS_SUCCESS';
export const LOAD_PLANTS_FAILURE = 'LOAD_PLANTS_FAILURE';

export const loadPlants = () => createAction(LOAD_PLANTS_REQUEST);
export const loadPlantsSuccess = places => createAction(LOAD_PLANTS_SUCCESS, places);
export const loadPlantsFailure = error => createAction(LOAD_PLANTS_FAILURE, error);
