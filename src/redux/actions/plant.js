// @flow

import { createAction } from './utils';
import { Plant, PlantType } from '../../types';

export const LOAD_PLANTS_REQUEST = 'LOAD_PLANTS_REQUEST';
export const LOAD_PLANTS_SUCCESS = 'LOAD_PLANTS_SUCCESS';
export const LOAD_PLANTS_FAILURE = 'LOAD_PLANTS_FAILURE';

export const ADD_PLANT_REQUEST = 'ADD_PLANTS_REQUEST';
export const ADD_PLANT_SUCCESS = 'ADD_PLANTS_SUCCESS';
export const ADD_PLANT_FAILURE = 'ADD_PLANTS_FAILURE';

export const PATCH_PLANT_REQUEST = 'PATCH_PLANT_REQUEST';
export const PATCH_PLANT_SUCCESS = 'PATCH_PLANT_SUCCESS';
export const PATCH_PLANT_FAILURE = 'PATCH_PLANT_FAILURE';

export const LOAD_PLANT_TYPES_REQUEST = 'LOAD_PLANT_TYPES_REQUEST';
export const LOAD_PLANT_TYPES_SUCCESS = 'LOAD_PLANT_TYPES_SUCCESS';
export const LOAD_PLANTS_TYPES_FAILURE = 'LOAD_PLANTS_TYPES_FAILURE';

export const loadPlants =
    () => createAction(LOAD_PLANTS_REQUEST);
export const loadPlantsSuccess =
    (plants: Array<Plant>) => createAction(LOAD_PLANTS_SUCCESS, { plants });
export const loadPlantsFailure =
    (error: string) => createAction(LOAD_PLANTS_FAILURE, { error });

export const addPlant = (plant: Plant) => createAction(ADD_PLANT_REQUEST, { plant });
export const addPlantSuccess = (plant: Plant) => createAction(ADD_PLANT_SUCCESS, { plant });
export const addPlantFailure = (error: string) => createAction(ADD_PLANT_FAILURE, { error });

export const patchPlant = (plantId: number, plant: Plant) =>
    createAction(PATCH_PLANT_REQUEST, { plantId, plant });
export const patchPlantSuccess = (plant: Plant) => createAction(PATCH_PLANT_SUCCESS, { plant });
export const patchPlantFailure = (error: string) => createAction(PATCH_PLANT_FAILURE, { error });

export const loadPlantTypes =
    () => createAction(LOAD_PLANT_TYPES_REQUEST);
export const loadPlantTypesSuccess =
    (plantTypes: Array<PlantType>) => createAction(LOAD_PLANT_TYPES_SUCCESS, { plantTypes });
export const loadPlantTypesFailure =
    (error: string) => createAction(LOAD_PLANTS_TYPES_FAILURE, { error });
