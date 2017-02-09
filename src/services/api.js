// @flow

import { camelizeKeys } from 'humps';
import { getToken } from './jwt';
import { Place, Plant } from '../types';
import placesMock from '../containers/places-mock';
import plantsMock from '../containers/plants-mock';

const API_ROOT = 'https://plantus.xyz/';

async function callApiGet(endpoint: string): any {
  let fullUrl: string = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  if (!fullUrl.endsWith('/')) {
    fullUrl += '/';
  }

  const jwtToken = await getToken();

  return fetch(fullUrl, {
    headers: {
      Authorization: `JWT ${jwtToken}`,
    },
  })
    .then(response =>
      response
      .response.json().then(json => ({ json, response })),
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return camelizedJson;
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' }),
    );
}

// export const getAllPlaces = (userId: number): Array<Place> => callApiGet(`users/${userId}/places`);
export const getAllPlaces = (userId: number): Array<Place> => placesMock;
// export const getAllPlants = (userId: number): Array<Plant> => callApiGet(`users/${userId}/pots`);
export const getAllPlants = (userId: number): Array<Plant> => plantsMock;
