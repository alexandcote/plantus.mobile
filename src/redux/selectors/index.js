// @flow
import { Map } from 'immutable';
import { Plant, Place, PlantType } from '../../types';

export const selectSession: (state: any) => Object = state => state.session;
export const selectJwt: (state: any) => string = state => state.session && state.session.jwt;
export const selectPlants: (state: any) => Map<number, Plant> = state => state.plants;
export const selectPlant: (state: any, plantId: number) => Plant
    = (state, plantId) => selectPlants(state).get(plantId);
export const selectPlantsForPlace: (state: any, placeId: number) => Map<number, Plant>
    = (state, placeId) => state.plants.filter(plant => plant.place === placeId);
export const selectPlaces: (state: any) => Map<number, Place> = state => state.places;
export const selectPlace: (state: any, placeId: number) => Place
    = (state, placeId) => selectPlaces(state).get(placeId);
export const selectPlantTypes: (state: any) => Map<number, PlantType> = state => state.plantTypes;
