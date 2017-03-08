// @flow

import { combineReducers } from 'redux';
import places from './place';
import plants from './plant';
import session from './session';
import init from './init';
import nav from './nav';
import users from './users';
// ... other reducers

const appReducer = combineReducers({
  places,
  plants,
  session,
  init,
  nav,
  users,
  // ... other reducers
});

const rootReducer = (state: ?{}, action: Object) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
