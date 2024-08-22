import { useMutation } from '@tanstack/react-query';

import { normalizeResponse } from '@/src/services/httpClient';
import { AuthenticateResource, type LoginParams } from '../../../domain';

export const useAuthenticate = () => {
  const request = async (params: LoginParams) => {
    const response = await new AuthenticateResource().login(params);

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
