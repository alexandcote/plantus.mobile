// @flow
import { Map } from 'immutable';
import { Plant, Place, PlantType } from '../../types';

export const selectSession: (state: any) => Object = state => state.session;
export const selectJwt: (state: any) => string = state => state.session && state.session.jwt;
export const selectPlants: (state: any) => Map<number, Plant> = state => state.plants;
export const selectPlantsForPlace: (state: any, placeId: number) => Map<number, Plant>
  = (state, placeId) => state.plants.filter(plant => plant.place === placeId);
export const selectPlaces: (state: any) => Map<number, Place> = state => state.places;
export const selectPlantTypes: (state: any) => Map<number, PlantType> = state => state.plantTypes;
