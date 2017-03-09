// @flow

import { Place, Plant, User } from '../types';
import http from './http-client';

export const logIn = (email: string, password: string) =>
    http.fetch('auth/token', { method: 'POST', body: { email, password } });

export const getAllPlaces = (): Array<Place> =>
    http.fetch('places');
export const addPlace = (place: Place): void =>
    http.fetch('places', { method: 'POST', body: place });

export const getAllPlants = (): Array<Plant> =>
    http.fetch('pots');

export const getUsers = (): Array<User> =>
    http.fetch('users');
