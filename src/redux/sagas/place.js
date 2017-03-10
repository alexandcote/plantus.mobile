// @flow
import { put, call, take } from 'redux-saga/effects';
import { Actions as nav } from 'react-native-router-flux';

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
    yield put(placeActions.addPlaceSuccess(response));
    yield put(placeActions.loadPlaces());
    yield call(nav.pop);
  } else {
    yield put(placeActions.addPlaceError(error));
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
    const { place } = yield take(placeActions.ADD_PLACE_REQUEST);
    yield call(addPlace, place);
  }
}
