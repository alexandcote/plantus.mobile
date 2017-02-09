// @flow

import { combineReducers } from 'redux';
import routes from './routes';
import places from './place';
import plants from './plant';
// ... other reducers

export default combineReducers({
  routes,
  places,
  plants,
  // ... other reducers
});
