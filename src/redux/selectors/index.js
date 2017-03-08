// @flow
export const selectSession = (state: any) => state.session;
export const selectJwt = (state: any) => state.session && state.session.jwt;
export const selectPlants = (state: any) => state.plants;
export const selectPlaces = (state: any) => state.places;
