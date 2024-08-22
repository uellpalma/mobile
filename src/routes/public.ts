import { AuthStack, AuthStackParamList } from '../modules/auth/routes';
import { StackRouteConfig } from './types';

export type PublicStackParamList = AuthStackParamList;

type PublicStackRouteConfig = StackRouteConfig<PublicStackParamList>;

const PublicStack: Record<keyof PublicStackParamList, PublicStackRouteConfig> =
  {
    ...AuthStack,
  };

export default PublicStack;
