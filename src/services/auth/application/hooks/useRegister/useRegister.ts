import { useMutation } from '@tanstack/react-query';

import { normalizeResponse } from '@/src/services/httpClient';
import { AuthenticateResource, type RegisterParams } from '../../../domain';

export const useRegister = () => {
  const request = async (params: RegisterParams) => {
    const response = await new AuthenticateResource().register(params);

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
