// @flow
import { NavigationActions } from 'react-navigation';
import MainNavigator from '../../routing/main-navigator';
import { authActions } from '../actions';

export default function reducer(state: {}, action: Object) {
  switch (action.type) {
    // case authActions.LOG_IN_SUCCESS: {
    //   return MainNavigator.router
    //       .getStateForAction(NavigationActions.reset({
    //         actions: [NavigationActions.navigate({ routeName: 'MainTabView' })],
    //         index: 0,
    //       }), state);
    // }
    // case authActions.LOG_OUT: {
    //   return MainNavigator.router
    //       .getStateForAction(NavigationActions.reset({
    //         actions: [NavigationActions.navigate({ routeName: 'Login' })],
    //         index: 0,
    //       }), state);
    // }
    default: {
      return MainNavigator.router.getStateForAction(action, state);
    }
  }
}
