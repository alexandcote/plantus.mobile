import { Actions as nav } from 'react-native-router-flux';
import { REHYDRATE } from 'redux-persist/constants';
import httpClient from '../../services/http-client';
import { selectJwt } from '../selectors';
import { authActions } from '../actions';

const apiAuthMiddleware = ({ getState }) => next => action => {
  const oldToken = selectJwt(getState());
  const result = next(action);
  const newToken = selectJwt(getState());

  if (oldToken !== newToken) {
    console.log(newToken);
    httpClient.auth(newToken);
  }

  if (action.type === REHYDRATE) {
    next(authActions.authReady());
  } else if (action.type === authActions.LOG_OUT) {
    nav.login({ type: 'reset' });
  }

  return result;
};

export default apiAuthMiddleware;
