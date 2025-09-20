import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AppRoutes } from './routes';

export type RootStackParamList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.ShiftDetails]: { id: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  AppRoutes.Home
>;

type ShiftDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  AppRoutes.ShiftDetails
>;

type ShiftDetailsScreenProp = NativeStackScreenProps<
  RootStackParamList,
  AppRoutes.ShiftDetails
>;

type HomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  AppRoutes.Home
>;

export type NavigationProps = {
  [AppRoutes.Home]: HomeScreenNavigationProp;
  [AppRoutes.ShiftDetails]: ShiftDetailsScreenNavigationProp;
};

export type ScreensProps = {
  [AppRoutes.Home]: HomeScreenProp;
  [AppRoutes.ShiftDetails]: ShiftDetailsScreenProp;
};
