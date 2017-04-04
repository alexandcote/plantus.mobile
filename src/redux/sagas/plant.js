// @flow

import { put, call, take } from 'redux-saga/effects';
import { Actions as nav } from 'react-native-router-flux';

import * as api from '../../services/api';
import { plantActions } from '../actions';

export function* loadPlants(): any {
  while (true) {
    yield take(plantActions.LOAD_PLANTS_REQUEST);
    const { response, error } = yield call(api.getAllPlants);
    if (response) {
      yield put(plantActions.loadPlantsSuccess(response.results));
    } else {
      yield put(plantActions.loadPlantsFailure(error));
    }
  }
}

export function* addPlant(): any {
  while (true) {
    const { plant } = yield take(plantActions.ADD_PLANT_REQUEST);
    const { response, error } = yield call(api.addPlant, plant);
    if (response) {
      yield put(plantActions.addPlantSuccess(response));
      yield put(plantActions.loadPlants());
      yield call(nav.pop);
    } else {
      yield put(plantActions.addPlantError(error));
    }
  }
}

export function* loadPlantTypes(): any {
  while (true) {
    yield take(plantActions.LOAD_PLANT_TYPES_REQUEST);
    const { response, error } = yield call(api.getAllPlantTypes);
    if (response) {
      yield put(plantActions.loadPlantTypesSuccess(response.results));
    } else {
      yield put(plantActions.loadPlantTypesFailure(error));
    }
  }
}
