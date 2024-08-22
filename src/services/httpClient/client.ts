import axios, { AxiosResponse } from 'axios';

import { getAuthToken } from './getToken';

const source = axios.CancelToken.source();

const client = axios.create({
  baseURL: '/',
  timeout: 120000,
  cancelToken: source.token,
});

client.interceptors.request.use(async (config) => {
  config.headers = {
    ...config.headers,
    ...getAuthToken(),
  };

  return config;
});

// client.interceptors.response.use(responseNormalize, redirectUnauthorized);
client.defaults.headers.common['Content-Type'] =
  'application/json;charset=utf-8';

export { client, source };
