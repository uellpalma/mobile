import * as yup from 'yup';

export const forgotPassSchema = yup.object({
  email: yup.string().required(),
});

export type ForgotPassFormValues = yup.InferType<typeof forgotPassSchema>;
