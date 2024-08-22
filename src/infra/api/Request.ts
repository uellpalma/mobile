import {
  request as baseRequest,
  HttpMethodsEnum,
  type Response,
} from '../../../httpClient';
import ApiConfig from '../config/ApiConfig';

import { ClientInstanceParams, MethodParams } from './request.types';

export default class ApiRequest {
  private clientInstance: null | Promise<Response<any>>;

  constructor() {
    this.clientInstance = null;
  }

  request<T>(params: ClientInstanceParams): Promise<Response<T>> {
    if (this.clientInstance === undefined || this.clientInstance === null) {
      const apiUrl = new ApiConfig().getApiUrl();

      this.clientInstance = baseRequest({
        ...params,
        baseURL: apiUrl,
      });
    }

    return this.clientInstance;
  }

  async get<T>(
    url: string,
    methodParams: MethodParams = {},
  ): Promise<Response<T>> {
    return await this.request<T>({
      ...methodParams,
      method: HttpMethodsEnum.GET,
      url,
    });
  }

  async post<T>(
    url: string,
    methodParams: MethodParams = {},
  ): Promise<Response<T>> {
    return await this.request<T>({
      ...methodParams,
      method: HttpMethodsEnum.POST,
      url,
    });
  }

  async put<T>(
    url: string,
    methodParams: MethodParams = {},
  ): Promise<Response<T>> {
    return await this.request<T>({
      ...methodParams,
      method: HttpMethodsEnum.PUT,
      url,
    });
  }

  async delete<T>(url: string): Promise<Response<T>> {
    return await this.request<T>({
      method: HttpMethodsEnum.DELETE,
      url,
    });
  }
}
