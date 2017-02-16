import { put, call, take } from 'redux-saga/effects';
import { initActions } from '../actions';
import {  }

function* launchRestoreState() {
  
}

export function* watchRestoreState() {
  while (true) {
    yield take(initActions.RESTORE_STATE);
    yield call(launchRestoreState);
  }
}
