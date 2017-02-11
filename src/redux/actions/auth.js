// @flow
import { createAction } from './utils';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const logIn = (email: string, password: string) =>
    createAction(LOG_IN_REQUEST, { email, password });
export const logInSuccess = (token: string) => createAction(LOG_IN_SUCCESS, { token });
export const logInFailure = (error: string) => createAction(LOG_IN_FAILURE, { error });
