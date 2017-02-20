// @flow

import { put, call, take } from 'redux-saga/effects';
import { initActions } from '../actions';
import { loadSession } from '../../services/persistent-storage';

function* launchRestoreState() {
  const session = yield loadSession();
  yield put(initActions.restoreStateSuccess(session));
}

export function* watchRestoreState(): any {
  while (true) {
    yield take(initActions.RESTORE_STATE);
    yield call(launchRestoreState);
  }
}
