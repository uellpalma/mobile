import { CreateTodoFormValues } from './schema';

export enum TodoStatusEnum {
  TODO = 'to-do',
  DOING = 'doing',
  DONE = 'done',
}

export type TodoData = {
  id: string;
  title: string;
  description: string;
  status: TodoStatusEnum;
  created_at: Date;
  updated_at: Date;
};

export type TodosListResponse = {
  todos: TodoData[];
};

export type CreateTodoParams = CreateTodoFormValues;

export type UpdateTodoParams = Partial<CreateTodoFormValues>;
