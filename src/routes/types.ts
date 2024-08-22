import {
  EventMapBase,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  HomeStack: undefined;
};

export type StackRouteConfig<T extends ParamListBase> = Omit<
  RouteConfig<
    T,
    keyof T,
    StackNavigationState<T>,
    NativeStackNavigationOptions,
    EventMapBase
  >,
  'name'
>;
