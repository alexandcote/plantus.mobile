// @flow

import { combineReducers } from 'redux';
import routes from './routes';
import places from './place';
import plants from './plant';
import auth from './auth';
// ... other reducers

export default combineReducers({
  routes,
  places,
  plants,
  auth,
  // ... other reducers
});
