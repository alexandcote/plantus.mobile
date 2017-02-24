// @flow
import { REHYDRATE } from 'redux-persist/constants';
import { authActions } from '../actions';

const initialState = {
  initializing: true,
  authReady: false,
};

export default function reducer(state = initialState, action: Object) {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        initializing: false,
      };
    case authActions.AUTH_READY:
      return {
        ...state,
        authReady: true,
      };
    default:
      return state;
  }
}
