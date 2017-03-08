// @flow

import { put, call, take } from 'redux-saga/effects';

import { getUsers } from '../../services/api';
import { userActions } from '../actions';

function* fetchUsers() {
  const { response, error } = yield call(getUsers);
  if (response) {
    yield put(userActions.loadUsersSuccess(response.results));
  } else {
    yield put(userActions.loadUsersError(error));
  }
}

export function* watchLoadUsers(): any {
  while (true) {
    yield take(userActions.LOAD_USERS_REQUEST);
    yield call(fetchUsers);
  }
}
