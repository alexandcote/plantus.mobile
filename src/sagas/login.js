import { put, call, take } from 'redux-saga/effects';
import { authActions } from '../redux/actions';
import { logIn } from '../services/api';

function* launchLogIn(email, password) {
  const { response, error } = yield logIn(email, password);
  if (response) {
    console.log(response);
    yield put(authActions.logInSuccess(response));
  } else {
    console.log(error);
    yield put(authActions.logInFailure(error));
  }
}

export function* watchLogIn(): any {
  while (true) {
    const { email, password } = yield take(authActions.LOG_IN_REQUEST);
    console.log(`saga: ${email}, ${password}`);
    yield call(launchLogIn, email, password);
  }
}
