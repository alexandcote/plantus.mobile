// @flow
import { createAction } from './utils';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const AUTH_READY = 'AUTH_READY';

export const LOG_OUT = 'LOG_OUT';

export const logIn = (email: string, password: string) =>
    createAction(LOG_IN_REQUEST, { email, password });
export const logInSuccess = (jwt: string) => createAction(LOG_IN_SUCCESS, { jwt });
export const logInFailure = (error: string) => createAction(LOG_IN_FAILURE, { error });

export const logOut = () => createAction(LOG_OUT);

export const authReady = () => createAction(AUTH_READY);
