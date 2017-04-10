// @flow
import { put, call, take, select } from 'redux-saga/effects';
import { Actions as nav, ActionConst } from 'react-native-router-flux';

import { selectPlace } from '../selectors';
import { objectToFormData } from '../../services/utils';
import * as api from '../../services/api';
import { placeActions } from '../actions';

import { type Place } from '../../types';

function* fetchPlaces() {
  const { response, error } = yield call(api.getAllPlaces);
  if (response) {
    yield put(placeActions.loadPlacesSuccess(response.results));
  } else {
    yield put(placeActions.loadPlacesFailure(error));
  }
}

export function* watchLoadPlaces(): any {
  while (true) {
    yield take(placeActions.LOAD_PLACES_REQUEST);
    yield call(fetchPlaces);
  }
}

export function* addPlace(): any {
  while (true) {
    const { place } = yield take(placeActions.ADD_PLACE_REQUEST);
    const { response, error } = yield call(api.addPlace, place);
    if (response) {
      yield put(placeActions.addPlaceSuccess(response));
      yield put(placeActions.loadPlaces());
      yield call(nav.placeImageStep);
    } else {
      yield put(placeActions.addPlaceError(error));
    }
  }
}

export function* placeImageStep(): any {
  while (true) {
    const { placeId, image } = yield take(placeActions.PLACE_IMAGE_STEP_REQUEST);
    const place = objectToFormData({ picture: image });
    const { response, error } = yield call(api.patchPlace, placeId, place);
    if (response) {
      yield put(placeActions.patchPlaceSuccess({ partialPlace: response, placeId }));
      yield put(placeActions.placeImageStepSuccess(response));
      const place = yield select(selectPlace, placeId);
      yield call(nav.placeDetail, { type: ActionConst.REPLACE, place });
    } else {
      yield put(placeActions.placeImageStepFailure(error));
    }
  }
}
