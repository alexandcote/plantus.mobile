// @flow

import { put, call, take } from 'redux-saga/effects';
import { Set } from 'immutable';

import * as api from '../../services/api';
import { operationActions } from '../actions';

export function* loadPlantsWatering(): any {
  while (true) {
    const { plantId } = yield take(operationActions.LOAD_PLANTS_WATERING_REQUEST);
    const { response, error } = yield call(api.getOperations, plantId, false);
    if (response) {
      const plantIds = response.results.map(op => op.pot);
      yield put(operationActions.loadPlantsWateringSuccess(Set(plantIds)));
    } else {
      yield put(operationActions.loadPlantsWateringFailure(error));
    }
  }
}
