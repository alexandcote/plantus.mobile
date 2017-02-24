// @flow
import { put, call, take } from 'redux-saga/effects';

import { getAllPlaces } from '../../services/api';
import { placeActions } from '../actions';

function* fetchPlaces() {
  // const { response, error } = yield call(getAllPlaces);
  const response = yield call(getAllPlaces); // using mock data
  if (response) {
    yield put(placeActions.loadPlacesSuccess(response));
  } else {
    // yield put(placeActions.loadPlacesFailure(error));
  }
}
 
export function* watchLoadPlaces(): any {
  while (true) {
    yield take(placeActions.LOAD_PLACES_REQUEST);
    yield call(fetchPlaces);
  }
}
