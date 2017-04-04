// @flow

import { Set } from 'immutable';
import { createAction } from './utils';

export const LOAD_PLANTS_WATERING_REQUEST = 'LOAD_PLANTS_WATERING_REQUEST';
export const LOAD_PLANTS_WATERING_SUCCESS = 'LOAD_PLANTS_WATERING_SUCCESS';
export const LOAD_PLANTS_WATERING_FAILURE = 'LOAD_PLANTS_WATERING_FAILURE';

export const WATER_PLANT_REQUEST = 'WATER_PLANT_REQUEST';
export const WATER_PLANT_SUCCESS = 'WATER_PLANT_SUCCESS';
export const WATER_PLANT_FAILURE = 'WATER_PLANT_FAILURE';

export const loadPlantsWatering = (plantId?: number) =>
    createAction(LOAD_PLANTS_WATERING_REQUEST, { plantId });
export const loadPlantsWateringSuccess = (plantIds: Set<number>) =>
    createAction(LOAD_PLANTS_WATERING_SUCCESS, { plantIds });
export const loadPlantsWateringFailure = (error: string) =>
    createAction(LOAD_PLANTS_WATERING_FAILURE, { error });

export const waterPlant = (plantId: number) =>
    createAction(WATER_PLANT_REQUEST, { plantId });
export const waterPlantSuccess = (plantId: number) =>
    createAction(WATER_PLANT_SUCCESS, { plantId });
export const waterPlantFailure = (plantId: number, error: string) =>
    createAction(WATER_PLANT_FAILURE, { plantId, error });
