// @flow
import { put, call, take } from 'redux-saga/effects';

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

function* addPlace(place: Place) {
  const { response, error } = yield call(api.addPlace, place);
  if (response) {
    console.log(response);
    yield put(placeActions.loadPlacesSuccess(response));
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

export function* watchAddPlace(): any {
  while (true) {
    const place: Place = yield take(placeActions.ADD_PLACE_REQUEST);
    yield call(addPlace, place);
  }
}
