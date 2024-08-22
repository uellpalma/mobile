import { useMutation } from '@tanstack/react-query';

import { normalizeResponse } from '@/src/services/httpClient';

export const useUpdateUser = () => {
  const request = async () => {
    const response = {};

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
