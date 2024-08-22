import { StackRouteConfig } from '../../../routes/types';

import { SingInScreen } from '../presentation/screen/signin';
import { SignUpScreen } from '../presentation/screen/signup';
import { ForgotPassScreen } from '../presentation/screen/forgot-pass';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPass: undefined;
};

type AuthStackRouteConfig = StackRouteConfig<AuthStackParamList>;

export const AuthStack: Record<keyof AuthStackParamList, AuthStackRouteConfig> =
  {
    SignIn: {
      component: SingInScreen,
    },
    SignUp: {
      component: SignUpScreen,
    },
    ForgotPass: {
      component: ForgotPassScreen,
    },
  };
