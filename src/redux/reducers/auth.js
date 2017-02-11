// @flow
import { authActions } from '../actions';

export default function reducer(state: string, action: Object) {
  switch (action.type) {
    case authActions.LOG_IN_SUCCESS:
      return {
        token: action.token,
      };
    default:
      return state;
  }
}
