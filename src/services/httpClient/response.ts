import { ResponseType } from './type';

export const normalizeResponse = <T>(response: ResponseType<T>): T => {
  if (response.error) throw response.error;

  return response.body;
};
