// @flow

import { combineReducers } from 'redux';
import routes from './routes';
import places from './place';
import plants from './plant';
import session from './session';
// ... other reducers

export default combineReducers({
  routes,
  places,
  plants,
  session,
  // ... other reducers
});
