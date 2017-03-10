// @flow

import { Place, PlantType, Plant, User } from '../types';
import http from './http-client';

export const logIn = (email: string, password: string) =>
    http.fetch('auth/token', { method: 'POST', body: { email, password } });

export const getAllPlaces = (): Array<Place> =>
    http.fetch('places');
export const addPlace = (place: Place): void =>
    http.fetch('places', { method: 'POST', body: place });

export const getAllPlants = (): Array<Plant> =>
    http.fetch('pots');
export const addPlant = (plant: Plant): void =>
    http.fetch('pots', { method: 'POST', body: plant });
export const getAllPlantTypes = (): Array<PlantType> =>
    http.fetch('plants');

export const getUsers = (): Array<User> =>
    http.fetch('users');
