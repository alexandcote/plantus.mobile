// @flow
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from '../containers/login';
import Drawer from '../containers/drawer';
import MainTabView from '../containers/main-tab-view';
import colors from '../styles/colors';

const stackNavigator = StackNavigator({
  MainTabView: {
    screen: MainTabView,
    navigationOptions: {
      title: 'PlantUS',
    },
  },
}, {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: colors.colorPrimary,
        elevation: 0,
      },
      titleStyle: {
        color: 'white',
        fontWeight: 'normal',
        textAlign: 'center',
      },
    },
  },
});

const drawerNavigator = DrawerNavigator({
  main: {
    screen: stackNavigator,
    navigationOptions: {
      title: 'PlantUS',
    },
  },
}, {
  initialRouteName: 'main',
  contentComponent: Drawer,
});

export default drawerNavigator;
