// @flow

import { put, call, take } from 'redux-saga/effects';
import { Actions as nav } from 'react-native-router-flux';
import { authActions } from '../actions';
import { logIn } from '../../services/api';

function* launchLogIn(email, password) {
  const { response, error } = yield logIn(email, password);
  if (response) {
    yield put(authActions.logInSuccess(response.token));
    yield nav.newPlace();
  } else {
    yield put(authActions.logInFailure(error));
  }
}

export function* watchLogIn(): any {
  while (true) {
    const { email, password } = yield take(authActions.LOG_IN_REQUEST);
    yield call(launchLogIn, email, password);
  }
}
