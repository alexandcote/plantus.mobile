// @flow
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Drawer from '../containers/drawer';
import Main from '../containers/main';
import colors from '../styles/colors';

const stackNavigator = StackNavigator({
  Main: {
    screen: Main,
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
