// @flow

import { fork } from 'redux-saga/effects';
import { watchLoadPlants } from './plant';
import { watchLoadPlaces } from './place';
import { watchLogIn } from './login';

export default function* root(): any {
  yield [
    fork(watchLoadPlants),
    fork(watchLoadPlaces),
    fork(watchLogIn),
  ];
}
