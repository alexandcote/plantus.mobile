// @flow

import { put, call, take } from 'redux-saga/effects';

import { getAllPlants } from '../../services/api';
import { plantActions } from '../actions';

function* fetchPlants() {
  const plants = yield call(getAllPlants);
  if (plants) {
    yield put(plantActions.loadPlantsSuccess(plants));
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
