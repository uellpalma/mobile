import { type ForgotPassFormValues, useForgotPass } from "@/src/services/auth";
import { useCallback, useMemo } from "react";

export const useForgotPassFormSubmit = () => {
  const {
    isPending: isPendingSending,
    isError: isForgotPassError,
    mutate: forgotPassRequest,
  } = useForgotPass();

  const onSubmit = useCallback(
    (values: ForgotPassFormValues) => {
      forgotPassRequest(values, {
        onError: () => {
          alert("Erro ao fazer requisição de nova senha.");
        },
        onSuccess: (data) => {},
      });
    },
    [forgotPassRequest]
  );

  const payload = useMemo(
    () => ({
      isForgotPassError,
      isPendingSending,
      onSubmit,
    }),
    [isForgotPassError, isPendingSending, onSubmit]
  );

  return payload;
};
