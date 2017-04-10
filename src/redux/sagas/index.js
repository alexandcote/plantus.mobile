// @flow

import { fork } from 'redux-saga/effects';
import { loadPlants, addPlant, loadPlantTypes, patchPlant, plantImageStep } from './plant';
import { watchLoadPlaces, addPlace, placeImageStep } from './place';
import { watchLogIn } from './login';
import { watchLoadUsers } from './user';
import { loadPlantsWatering, waterPlant } from './operation';

export default function* root(): any {
  yield [
    fork(loadPlants),
    fork(watchLoadPlaces),
    fork(addPlant),
    fork(loadPlantTypes),
    fork(addPlace),
    fork(placeImageStep),
    fork(watchLogIn),
    fork(watchLoadUsers),
    fork(loadPlantsWatering),
    fork(patchPlant),
    fork(plantImageStep),
    fork(waterPlant),
  ];
}
