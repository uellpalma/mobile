import { useMutation } from '@tanstack/react-query';

import { normalizeResponse } from '../../../../httpClient';
import { TodosResource } from '../../../domain';

export const useDeleteTodo = () => {
  const request = async () => {
    const response = await new TodosResource().deleteTodo();

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
