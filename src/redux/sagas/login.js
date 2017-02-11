import { put, call, take } from 'redux-saga/effects';
import { authActions } from '../actions';
import { logIn, saveJwt } from '../../services/api';

function* launchLogIn(email, password) {
  const { response, error } = yield logIn(email, password);
  yield saveJwt(response.token);
  if (response) {
    yield put(authActions.logInSuccess(response.token));
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
