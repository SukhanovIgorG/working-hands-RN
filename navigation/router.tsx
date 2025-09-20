import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import ShiftDetails from '../screens/ShiftDetails';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: { title: 'Главная' },
    },
    ShiftDetails: {
      screen: ShiftDetails,
      options: { title: 'Детали' },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
