// @flow

import { combineReducers } from 'redux';
import places from './place';
import plants from './plant';
import session from './session';
import init from './init';
import users from './users';
// ... other reducers

const appReducer = combineReducers({
  places,
  plants,
  session,
  init,
  users,
  // ... other reducers
});

export default appReducer;
