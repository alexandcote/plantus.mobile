import { camelizeKeys } from 'humps';

type Method = | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Options = {
  headers?: {},
  method?: Method,
  body?: {},
}

class HttpClient {
  apiRoot: string;
  headers: Object;

  constructor(apiRoot: string, headers?: Object, jwt?: string) {
    this.apiRoot = apiRoot;
    this.headers = headers || {};
    this.jwt = jwt;
  }

  auth(jwt: string): void {
    this.jwt = jwt;
  }

  async fetch(endpoint: string, options?: Options) {
    let fullUrl: string = (endpoint.startsWith('http')) ? endpoint : this.apiRoot + endpoint;
    if (true) {
      fullUrl += '/';
    }

    const requestOptions = {
      headers: this.headers,
      method: 'GET',
    };

    if (this.jwt) {
      requestOptions.headers.Authorization = `JWT ${this.jwt}`;
    }
    if (options) {
      requestOptions.headers = Object.assign(requestOptions.headers, options.headers);
      if (options.body) {
        if (options.body instanceof FormData) { // eslint-disable-line
          requestOptions.body = options.body;
          requestOptions.headers['Content-Type'] = 'multipart/form-data';
        } else {
          requestOptions.body = JSON.stringify(options.body);
        }
      }
      if (options.method) {
        requestOptions.method = options.method;
      }
    }

    return fetch(fullUrl, requestOptions)
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
        error => ({ error: error || 'Something bad happened' }),
      );
  }
}

export default new HttpClient(
  'https://api.plantus.xyz/', {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
);
