// @flow

import { Place, Plant, User } from '../types';
import plantsMock from '../containers/plants-mock';
import placesMock from '../containers/places-mock';
import http from './http-client';

export const logIn = (email: string, password: string) =>
    http.fetch('auth/token', { method: 'POST', body: { email, password } });
export const getAllPlaces = (): Array<Place> => placesMock;
// export const getAllPlants = (): Array<Plant> => callApiGet(`users/${userId}/pots`);
export const getAllPlants = (): Array<Plant> => plantsMock;

export const getUsers = (): Array<User> => http.fetch('users');
