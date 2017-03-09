// @flow

import { put, call, take } from 'redux-saga/effects';

import * as api from '../../services/api';
import { plantActions } from '../actions';

function* fetchPlants() {
  const { response, error } = yield call(api.getAllPlants);
  if (response) {
    yield put(plantActions.loadPlantsSuccess(response.results));
  } else {
    yield put(plantActions.loadPlantsFailure(error));
  }
}

export function* watchLoadPlants(): any {
  while (true) {
    yield take(plantActions.LOAD_PLANTS_REQUEST);
    yield call(fetchPlants);
  }
}
