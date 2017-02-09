
import { put, call, takeLatest } from 'redux-saga/effects';

import { getAllPlaces } from '../services/api';
import { placeActions } from '../redux/actions';

function* fetchPlaces() {
  try {
    const places = yield call(getAllPlaces);
    yield put(placeActions.loadPlacesSuccess(places));
  } catch (e) {
    yield put(placeActions.loadPlacesFailure(e));
  }
}

export function* watchLoadPlaces() {
  yield takeLatest(placeActions.LOAD_PLACES_REQUEST, fetchPlaces);
}
