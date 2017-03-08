import httpClient from '../../services/http-client';
import { selectJwt } from '../selectors';
import { authActions } from '../actions';

const apiAuthMiddleware = ({ getState }) => next => action => {
  const oldToken = selectJwt(getState());
  const result = next(action);
  const newToken = selectJwt(getState());
  if (oldToken !== newToken) {
    httpClient.auth(newToken);
    if (newToken) {
      next(authActions.authReady());
    }
  }
  return result;
};

export default apiAuthMiddleware;
