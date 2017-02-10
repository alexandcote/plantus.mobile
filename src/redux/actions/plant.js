import { createAction } from './utils';
import { Plant } from '../../types';

export const LOAD_PLANTS_REQUEST = 'LOAD_PLANTS_REQUEST';
export const LOAD_PLANTS_SUCCESS = 'LOAD_PLANTS_SUCCESS';
export const LOAD_PLANTS_FAILURE = 'LOAD_PLANTS_FAILURE';

export const loadPlants = () => createAction(LOAD_PLANTS_REQUEST);
export const loadPlantsSuccess = (plants: Array<Plant>) => createAction(LOAD_PLANTS_SUCCESS, { plants });
export const loadPlantsFailure = (error: string) => createAction(LOAD_PLANTS_FAILURE, { error });
