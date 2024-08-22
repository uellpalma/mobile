import * as yup from 'yup';

export const createTodoSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
});

export type CreateTodoFormValues = yup.InferType<typeof createTodoSchema>;
