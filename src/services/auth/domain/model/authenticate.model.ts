import {
  type ForgotPassFormValues,
  type LoginFormValues,
  type RegisterFormValues,
} from './schema';

export type AuthenticateResponse = {
  token: string;
};

export type LoginParams = LoginFormValues;
export type RegisterParams = RegisterFormValues;
export type ForgotPassParams = ForgotPassFormValues;
