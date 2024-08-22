import { Response } from '../../../../httpClient';
import {
  type LoginParams,
  type AuthenticateResponse,
  type RegisterParams,
  type ForgotPassParams,
} from '../../model';

export interface IAuthenticateResource {
  login: (params: LoginParams) => Promise<Response<AuthenticateResponse>>;
  register: (params: RegisterParams) => Promise<Response<AuthenticateResponse>>;
  forgotPass: (params: ForgotPassParams) => Promise<Response<string>>;
}
