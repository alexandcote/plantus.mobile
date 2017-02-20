// @flow

import { Place, Plant } from '../types';
import plantsMock from '../containers/plants-mock';
import placesMock from '../containers/places-mock';
import http from './http-client';

export const saveJwt = (jwt: string) => http.auth(jwt);

export const logIn = (email: string, password: string): string =>
    http.fetch('auth/token', { method: 'POST', body: { email, password } });
export const getAllPlaces = (): Array<Place> => placesMock;
// export const getAllPlants = (): Array<Plant> => callApiGet(`users/${userId}/pots`);
export const getAllPlants = (): Array<Plant> => plantsMock;
