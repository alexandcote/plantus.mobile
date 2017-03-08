// @flow
import { authActions } from '../actions';

export type Session = {
  jwt?: string,
};

export default function reducer(state: Session = {}, action: Object) {
  switch (action.type) {
    case authActions.LOG_IN_SUCCESS:
      return {
        ...state,
        jwt: action.jwt,
        authReady: false,
      };
    case authActions.LOG_OUT:
      return {
        ...state,
        jwt: null,
        authReady: false,
      };
    default:
      return state;
  }
}
