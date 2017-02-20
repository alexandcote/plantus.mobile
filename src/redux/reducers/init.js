// @flow
import { REHYDRATE } from 'redux-persist/constants';

export default function reducer(state: boolean = true, action: Object) {
  switch (action.type) {
    case REHYDRATE:
      return false;
    default:
      return state;
  }
}
