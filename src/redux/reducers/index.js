// @flow

import { combineReducers } from 'redux';
import places from './place';
import plants from './plant';
import plantTypes from './plant-type';
import session from './session';
import init from './init';
import users from './users';
import routes from './routes';
import { authActions } from '../actions';
// ... other reducers

const appReducer = combineReducers({
  places,
  plants,
  plantTypes,
  session,
  init,
  users,
  routes,
  // ... other reducers
});

const rootReducer = (state, action) => {
  if (action.type === authActions.LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
