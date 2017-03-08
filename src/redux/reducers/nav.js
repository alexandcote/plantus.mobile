// @flow
import MainNavigator from '../../routing/main-navigator';

export default function reducer(state: {}, action: Object) {
  return MainNavigator.router.getStateForAction(action, state);
}
