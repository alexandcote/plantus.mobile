// @flow
import { put, call, take } from 'redux-saga/effects';

import { getAllPlaces } from '../../services/api';
import { placeActions } from '../actions';

function* fetchPlaces() {
  const { response, error } = yield call(getAllPlaces);
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
