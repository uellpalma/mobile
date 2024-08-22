import { type Response } from '../../../../httpClient';
import {
  type TodosListResponse,
  type UpdateTodoParams,
  type CreateTodoParams,
  type TodoData,
} from '../../model';

export interface ITodoResource {
  create: (params: CreateTodoParams) => Promise<Response<TodoData>>;
  getList: () => Promise<Response<TodosListResponse>>;
  update: (params: UpdateTodoParams) => Promise<Response<TodoData>>;
  deleteTodo: () => Promise<Response<string>>;
}
