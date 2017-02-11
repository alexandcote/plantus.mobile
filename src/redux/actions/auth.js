// @flow
import { createAction, createRequestAction } from './utils';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const logIn = (email: string, password: string) =>
    createRequestAction(LOG_IN_REQUEST, false, { email, password });
export const logInSuccess = (jwt: string) => createAction(LOG_IN_SUCCESS, { jwt });
export const logInFailure = (error: string) => createAction(LOG_IN_FAILURE, { error });
