import ApiRequest from '../../../infra/api/Request';
import { endpoints } from '../../../infra/constants/endpoints';

import { type Response } from '../../../../httpClient';
import {
  type AuthenticateResponse,
  type ForgotPassParams,
  type LoginParams,
  type RegisterParams,
} from '../../model';
import { IAuthenticateResource } from './Authenticate.interface';

export default class Authenticate
  extends ApiRequest
  implements IAuthenticateResource
{
  endpoints: typeof endpoints.v1;

  constructor() {
    super();

    this.endpoints = endpoints.v1;
  }

  async login(params: LoginParams): Promise<Response<AuthenticateResponse>> {
    return await this.post<AuthenticateResponse>(
      this.endpoints.userLogin.path,
      {
        body: params,
      },
    );
  }

  async register(
    params: RegisterParams,
  ): Promise<Response<AuthenticateResponse>> {
    return await this.post<AuthenticateResponse>(
      this.endpoints.userLogin.path,
      {
        body: params,
      },
    );
  }

  async forgotPass(params: ForgotPassParams): Promise<Response<string>> {
    return await this.post(this.endpoints.userLogin.path, {
      body: params,
    });
  }
}
