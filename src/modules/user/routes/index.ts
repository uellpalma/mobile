import { StackRouteConfig } from '../../../routes/types';

import { ProfileScreen } from '../presentation/screen/profile';

export type ProfileStackParamList = {
  Profile: undefined;
};

type ProfileStackRouteConfig = StackRouteConfig<ProfileStackParamList>;

export const ProfileStack: Record<
  keyof ProfileStackParamList,
  ProfileStackRouteConfig
> = {
  Profile: {
    component: ProfileScreen,
  },
};
