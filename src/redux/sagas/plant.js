// @flow

import { put, call, take } from 'redux-saga/effects';
import { Actions as nav } from 'react-native-router-flux';

import * as api from '../../services/api';
import { plantActions } from '../actions';
import { Plant } from '../../types';

function* fetchPlants() {
  const { response, error } = yield call(api.getAllPlants);
  if (response) {
    yield put(plantActions.loadPlantsSuccess(response.results));
  } else {
    yield put(plantActions.loadPlantsFailure(error));
  }
}

function* addPlant(plant: Plant) {
  const { response, error } = yield call(api.addPlant, plant);
  if (response) {
    yield put(plantActions.addPlantSuccess(response));
    yield put(plantActions.loadPlants());
    yield call(nav.pop);
  } else {
    yield put(plantActions.addPlantError(error));
  }
}

function* fetchPlantTypes() {
  const { response, error } = yield call(api.getAllPlantTypes);
  if (response) {
    yield put(plantActions.loadPlantTypesSuccess(response.results));
  } else {
    yield put(plantActions.loadPlantTypesFailure(error));
  }
}

export function* watchLoadPlants(): any {
  while (true) {
    yield take(plantActions.LOAD_PLANTS_REQUEST);
    yield call(fetchPlants);
  }
}

export function* watchAddPlant(): any {
  while (true) {
    const { plant } = yield take(plantActions.ADD_PLANT_REQUEST);
    yield call(addPlant, plant);
  }
}

export function* watchLoadPlantTypes(): any {
  while (true) {
    yield take(plantActions.LOAD_PLANT_TYPES_REQUEST);
    yield call(fetchPlantTypes);
  }
}
