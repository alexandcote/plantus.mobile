// @flow
import { createAction } from './utils';

export const RESTORE_STATE = 'RESTORE_STATE_REQUEST';
export const RESTORE_STATE_SUCCESS = 'RESTORE_STATE_SUCCESS';

export const restoreState =
    () => createAction(RESTORE_STATE);
export const restoreStateSuccess =
    () => createAction(RESTORE_STATE_SUCCESS);
