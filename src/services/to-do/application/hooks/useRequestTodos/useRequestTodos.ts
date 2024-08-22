import { useMutation } from '@tanstack/react-query';

import { normalizeResponse } from '@/src/services/httpClient';
import { TodosResource } from '../../../domain';

export const useRequestTodos = () => {
  const request = async () => {
    const response = await new TodosResource().getList();

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
