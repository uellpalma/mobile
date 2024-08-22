import ApiRequest from '../../../infra/api/Request';
import { endpoints } from '../../../infra/constants/endpoints';

import { type Response } from '../../../../httpClient';
import { ITodoResource } from './Todos.interface';
import {
  type CreateTodoParams,
  type TodoData,
  type TodosListResponse,
  type UpdateTodoParams,
} from '../../model';

export default class Todo extends ApiRequest implements ITodoResource {
  endpoints: typeof endpoints.v1;

  constructor() {
    super();

    this.endpoints = endpoints.v1;
  }

  async getList(): Promise<Response<TodosListResponse>> {
    return await this.get<TodosListResponse>(this.endpoints.userLogin.path);
  }

  async create(params: CreateTodoParams): Promise<Response<TodoData>> {
    return await this.post<TodoData>(this.endpoints.userLogin.path, {
      body: params,
    });
  }

  async update(params: UpdateTodoParams): Promise<Response<TodoData>> {
    return await this.post<TodoData>(this.endpoints.userLogin.path, {
      body: params,
    });
  }

  async deleteTodo(): Promise<Response<string>> {
    return await this.delete<string>(this.endpoints.userLogin.path);
  }
}
