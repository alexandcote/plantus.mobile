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
      };
    case authActions.LOG_OUT:
      return {
        ...state,
        jwt: null,
      };
    default:
      return state;
  }
}
