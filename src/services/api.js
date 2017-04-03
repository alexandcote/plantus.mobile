// @flow

import { Place, PlantType, Plant, User } from '../types';
import http from './http-client';

export const logIn = (email: string, password: string) =>
    http.fetch('auth/token', { method: 'POST', body: { email, password } });

export const getAllPlaces = (): Object =>
    http.fetch('places');
export const addPlace = (place: Place): Object =>
    http.fetch('places', { method: 'POST', body: place });

export const getAllPlants = (): Object =>
    http.fetch('pots');
export const addPlant = (plant: Plant): Object =>
    http.fetch('pots', { method: 'POST', body: plant });
export const getAllPlantTypes = (): Array<PlantType> =>
    http.fetch('plants');

export const getUsers = (): Object =>
    http.fetch('users');

export const getOperations = (plantId?: number): Object => {
  const path = plantId ? `operations?pot=${plantId}` : 'operations';
  return http.fetch(path);
};
