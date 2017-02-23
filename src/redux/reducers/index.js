// @flow

import { combineReducers } from 'redux';
import places from './place';
import plants from './plant';
import session from './session';
import initializing from './init';
import nav from './nav';
// ... other reducers

const appReducer = combineReducers({
  places,
  plants,
  session,
  initializing,
  nav,
  // ... other reducers
});

const rootReducer = (state: ?{}, action: Object) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
