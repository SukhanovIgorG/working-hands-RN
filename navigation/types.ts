import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AppRoutes } from './routes';

export type RootStackParamList = {
  Home: undefined;
  ShiftDetails: { id: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type ShiftDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ShiftDetails'
>;

type ShiftDetailsScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'ShiftDetails'
>;

type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type NavigationProps = {
  [AppRoutes.Home]: HomeScreenNavigationProp;
  [AppRoutes.ShiftDetails]: ShiftDetailsScreenNavigationProp;
};

export type ScreensProps = {
  [AppRoutes.Home]: HomeScreenProp;
  [AppRoutes.ShiftDetails]: ShiftDetailsScreenProp;
};
