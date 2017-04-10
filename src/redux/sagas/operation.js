// @flow

import { put, call, take } from 'redux-saga/effects';
import { Set } from 'immutable';

import * as api from '../../services/api';
import { operationActions } from '../actions';
import { type Operation } from '../../types';

export function* loadPlantsWatering(): any {
  while (true) {
    yield take(operationActions.LOAD_PLANTS_WATERING_REQUEST);
    const { response, error } = yield call(api.getOperations, false);
    if (response) {
      const plantIds = response.results.map(op => op.pot);
      yield put(operationActions.loadPlantsWateringSuccess(Set(plantIds)));
    } else {
      yield put(operationActions.loadPlantsWateringFailure(error));
    }
  }
}

export function* waterPlant(): any {
  while (true) {
    const { plantId } = yield take(operationActions.WATER_PLANT_REQUEST);
    const operation: Operation = { pot: plantId, action: 'water' };
    const { response, error } = yield call(api.addOperation, operation);
    if (response) {
      yield put(operationActions.waterPlantSuccess(plantId));
    } else {
      yield put(operationActions.waterPlantFailure(plantId, error));
      yield put(operationActions.loadPlantsWatering());
    }
  }
}
