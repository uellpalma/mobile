import { AxiosRequestConfig, HttpStatusCode } from 'axios';
import { HttpMethodsEnum } from './constants';

export type RequestParams = {
  url: string;
  body?: any;
  baseURL?: string;
  params?: any;
  method: string | HttpMethodsEnum;
};

export type Headers = {
  [key: string]: string;
};

export type Response<T> = {
  body: T;
  status: HttpStatusCode;
  error?: any | Error;
  headers: Headers;
};

export type RequestType = Omit<AxiosRequestConfig, 'data'> & {
  body?: AxiosRequestConfig['data'];
};
