// @flow
import { authActions } from '../actions';

export type Session = {
  jwt?: string,
};

export default function reducer(state: Session = {}, action: Object) {
  switch (action.type) {
    case authActions.LOG_IN_SUCCESS:
      return {
        jwt: action.jwt,
      };
    default:
      return state;
  }
}
