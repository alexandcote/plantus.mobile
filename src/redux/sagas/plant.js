// @flow

import { put, call, take, takeEvery, select } from 'redux-saga/effects';
import { Actions as nav, ActionConst } from 'react-native-router-flux';

import { selectPlant } from '../selectors';
import * as api from '../../services/api';
import { objectToFormData } from '../../services/utils';
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
      yield call(nav.plantImageStep, { type: ActionConst.REPLACE, plant: response });
    } else {
      yield put(plantActions.addPlantFailure(error));
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

function* executePatchPlant({ plantId, plant }) {
  const apiCall = plant.picture ?
      () => api.patchPlant(plantId, objectToFormData(plant)) :
      () => api.patchPlant(plantId, plant);
  const { response, error } = yield call(apiCall);
  if (response) {
    yield put(plantActions.patchPlantSuccess(response));
  } else {
    yield put(plantActions.patchPlantFailure(error));
  }
}

export function* patchPlant(): any {
  yield takeEvery(plantActions.PATCH_PLANT_REQUEST, executePatchPlant);
}

export function* plantImageStep(): any {
  while (true) {
    const { plantId, image } = yield take(plantActions.PLANT_IMAGE_STEP_REQUEST);
    const plant = objectToFormData({ picture: image });
    const { response, error } = yield call(api.patchPlant, plantId, plant);
    if (response) {
      yield put(plantActions.patchPlantSuccess(response));
      yield put(plantActions.plantImageStepSuccess(response));
      const plant = yield select(selectPlant, plantId);
      console.log(plant);
      yield call(nav.plantDetail, { type: ActionConst.REPLACE, plant });
    } else {
      yield put(plantActions.plantImageStepFailure(error));
    }
  }
}
