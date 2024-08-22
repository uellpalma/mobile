import { type RegisterFormValues, useRegister } from "@/src/services/auth";
import { useCallback, useMemo } from "react";

export const useRegisterFormSubmit = () => {
  const {
    isPending: isPendingRegister,
    isError: isRegisterError,
    mutate: registerRequest,
  } = useRegister();

  const onSubmit = useCallback(
    (values: RegisterFormValues) => {
      registerRequest(values, {
        onError: () => {
          alert("Erro ao criar conta.");
        },
        onSuccess: (data) => {},
      });
    },
    [registerRequest]
  );

  const payload = useMemo(
    () => ({
      isRegisterError,
      isPendingRegister,
      onSubmit,
    }),
    [isRegisterError, isPendingRegister, onSubmit]
  );

  return payload;
};
