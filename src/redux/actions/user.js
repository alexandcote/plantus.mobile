// @flow

import { createAction } from './utils';
import { type User } from '../../types';

export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export const loadUsers = () => createAction(LOAD_USERS_REQUEST);
export const loadUsersSuccess = (users: Array<User>) =>
    createAction(LOAD_USERS_SUCCESS, { users });
export const loadUsersError = (error: string) =>
    createAction(LOAD_USERS_ERROR, { error });
