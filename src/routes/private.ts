import { TodoStack, type TodoStackParamList } from '../modules/todos/routes';
import {
  ProfileStack,
  type ProfileStackParamList,
} from '../modules/user/routes';
import { StackRouteConfig } from './types';

export type NewSignUpStackParamList = TodoStackParamList;

type PrivateStackRouteConfig = StackRouteConfig<NewSignUpStackParamList>;

const PrivateStack: Record<
  keyof NewSignUpStackParamList,
  PrivateStackRouteConfig
> = {
  ...TodoStack,
  ...ProfileStack,
};

export default PrivateStack;
