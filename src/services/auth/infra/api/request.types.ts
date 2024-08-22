import { type RequestParams } from '../../../httpClient';

export type ClientInstanceParams = Omit<RequestParams, 'baseURL'>;

export type MethodParams = Omit<ClientInstanceParams, 'method' | 'url'>;
