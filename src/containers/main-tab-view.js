// @flow
import { TabNavigator } from 'react-navigation';

import PlantList from './plant-list';
import PlaceList from './place-list';
import colors from '../styles/colors';

const tabNavigator = TabNavigator({
  Plants: {
    screen: PlantList,
    navigationOptions: {
      tabBar: {
        label: 'Plants',
      },
    },
  },
  Places: {
    screen: PlaceList,
    navigationOptions: {
      tabBar: {
        label: 'Places',
      },
    },
  },
}, {
  initialRouteName: 'Plants',
  tabBarOptions: {
    activeBackgroundColor: colors.colorPrimary,
    inactiveBackgroundColor: colors.colorPrimary,
    style: {
      backgroundColor: colors.colorPrimary,
    },
  },
});

export default tabNavigator;
