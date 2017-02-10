// @flow

import { camelizeKeys } from 'humps';
import { getToken } from './jwt';
import { Place, Plant } from '../types';
import placesMock from '../containers/places-mock';
import plantsMock from '../containers/plants-mock';

const API_ROOT = 'https://api.plantus.xyz/';

async function callApiGet(endpoint: string, authorized = true): any {
  let fullUrl: string = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  if (!fullUrl.endsWith('/')) {
    fullUrl += '/';
  }

  const jwtToken = await getToken();

  return fetch(fullUrl, {
    headers: authorized ? {
      Authorization: `JWT ${jwtToken}`,
    } : {},
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
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

async function callApiPost(endpoint: string, body = {}, authorized = true): any {
  let fullUrl: string = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  if (!fullUrl.endsWith('/')) {
    fullUrl += '/';
  }

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (authorized) {
    headers.Authorization = `JWT ${await getToken()}`;
  }

  return fetch(fullUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
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

export const logIn = (email: string, password: string): string =>
    callApiPost('auth/token/', { email, password }, false);
// export const getAllPlaces = (): Array<Place> => callApiGet(`users/${userId}/places`);
export const getAllPlaces = (): Array<Place> => placesMock;
// export const getAllPlants = (): Array<Plant> => callApiGet(`users/${userId}/pots`);
export const getAllPlants = (): Array<Plant> => plantsMock;
