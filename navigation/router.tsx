import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import ShiftDetails from '../screens/ShiftDetails';
import { AppRoutes } from './routes';
import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    [AppRoutes.Home]: {
      screen: HomeScreen,
      options: { title: 'Главная' },
    },
    [AppRoutes.ShiftDetails]: {
      screen: ShiftDetails,
      options: { title: 'Детали' },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
