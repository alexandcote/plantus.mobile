// @flow

import { Place, PlantType, Plant, User, Operation } from '../types';
import http from './http-client';

export const logIn = (email: string, password: string) =>
    http.fetch('auth/token', { method: 'POST', body: { email, password } });

export const getAllPlaces = (): Object =>
    http.fetch('places');
export const addPlace = (place: Place): Object =>
    http.fetch('places', { method: 'POST', body: place });
export const patchPlace = (placeId: number, place: Place): Object =>
    http.fetch(`places/${placeId}`, { method: 'PATCH', body: place });

export const getAllPlants = (): Object =>
    http.fetch('pots');
export const addPlant = (plant: Plant): Object =>
    http.fetch('pots', { method: 'POST', body: plant });
export const patchPlant = (plantId: number, plant: Plant): Object =>
    http.fetch(`pots/${plantId}`, { method: 'PATCH', body: plant });
export const getAllPlantTypes = (): Array<PlantType> =>
    http.fetch('plants');

export const getUsers = (): Object =>
    http.fetch('users');

export const getOperations = (completed?: boolean): Object => {
  let path = 'operations';
  // TODO: Put in http client instead
  if (completed !== undefined) {
    path += '?';
    const isCompleted = completed ? '1' : '0';
    path += `completed=${isCompleted}`;
  }
  return http.fetch(path);
};

export const addOperation = (operation: Operation): Object =>
    http.fetch('operations', { method: 'POST', body: operation });
