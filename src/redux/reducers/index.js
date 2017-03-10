// @flow

import { combineReducers } from 'redux';
import places from './place';
import plants from './plant';
import plantTypes from './plant-type';
import session from './session';
import init from './init';
import users from './users';
// ... other reducers

const appReducer = combineReducers({
  places,
  plants,
  plantTypes,
  session,
  init,
  users,
  // ... other reducers
});

export default appReducer;
