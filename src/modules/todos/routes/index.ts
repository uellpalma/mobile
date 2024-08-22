import { StackRouteConfig } from '../../../routes/types';

import { TodoListScreen } from '../presentation/screen/list';

export type TodoStackParamList = {
  TodoList: undefined;
};

type TodoStackRouteConfig = StackRouteConfig<TodoStackParamList>;

export const TodoStack: Record<keyof TodoStackParamList, TodoStackRouteConfig> =
  {
    TodoList: {
      component: TodoListScreen,
    },
  };
