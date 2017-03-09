// @flow

import { fork } from 'redux-saga/effects';
import { watchLoadPlants } from './plant';
import { watchLoadPlaces, watchAddPlace } from './place';
import { watchLogIn } from './login';
import { watchLoadUsers } from './user';

export default function* root(): any {
  yield [
    fork(watchLoadPlants),
    fork(watchLoadPlaces),
    fork(watchAddPlace),
    fork(watchLogIn),
    fork(watchLoadUsers),
  ];
}
