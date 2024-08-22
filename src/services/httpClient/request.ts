import { client } from './client';
import { RequestType, ResponseType } from './type';

export const request = async <T>({
  body: data,
  ...config
}: RequestType): Promise<ResponseType<T>> => {
  try {
    const response = await client({ ...config, data });

    return {
      body: response.data,
      status: response.status,
      headers: response.headers,
    };
  } catch (error: any) {
    return {
      body: error?.response?.data,
      status: error?.response?.status,
      error: error?.response,
      headers: error?.response?.headers,
    };
  }
};
