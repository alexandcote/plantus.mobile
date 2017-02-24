// @flow
import { userActions } from '../actions';
import { User } from '../../types';

export default function reducer(state: Array<User> = [], action: Object) {
  switch (action.type) {
    case userActions.LOAD_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
