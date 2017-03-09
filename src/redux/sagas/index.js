// @flow

import { fork } from 'redux-saga/effects';
import { watchLoadPlants } from './plant';
import { watchLoadPlaces } from './place';
import { watchLogIn, watchLoginInSuccess } from './login';
import { watchLoadUsers } from './user';

export default function* root(): any {
  yield [
    fork(watchLoadPlants),
    fork(watchLoadPlaces),
    fork(watchLogIn),
    fork(watchLoginInSuccess),
    fork(watchLoadUsers),
  ];
}
