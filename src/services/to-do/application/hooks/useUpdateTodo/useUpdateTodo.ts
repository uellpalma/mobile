import { useMutation } from '@tanstack/react-query';

import { normalizeResponse } from '@/src/services/httpClient';
import { TodosResource, type UpdateTodoParams } from '../../../domain';

export const useSaveTodo = () => {
  const request = async (params: UpdateTodoParams) => {
    const response = await new TodosResource().update(params);

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
