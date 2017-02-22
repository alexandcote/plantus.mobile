// @flow

import { combineReducers } from 'redux';
import places from './place';
import plants from './plant';
import session from './session';
import initializing from './init';
import nav from './nav';
// ... other reducers

export default combineReducers({
  places,
  plants,
  session,
  initializing,
  nav,
  // ... other reducers
});
