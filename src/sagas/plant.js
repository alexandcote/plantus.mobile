// @flow

import { put, call, take } from 'redux-saga/effects';

import { getAllPlants } from '../services/api';
import { plantActions } from '../redux/actions';

function* fetchPlants() {
  try {
    const plants = yield call(getAllPlants);
    yield put(plantActions.loadPlantsSuccess(plants));
  } catch (e) {
    yield put(plantActions.loadPlantsFailure(e));
  }
}

export function* watchLoadPlants(): any {
  while (true) {
    yield take(plantActions.LOAD_PLANTS_REQUEST);
    yield call(fetchPlants);
  }
}
