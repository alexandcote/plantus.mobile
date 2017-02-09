
import { put, call, take } from 'redux-saga/effects';

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
  while (true) {
    yield take(placeActions.LOAD_PLACES_REQUEST);
    yield call(fetchPlaces);
  }
}
