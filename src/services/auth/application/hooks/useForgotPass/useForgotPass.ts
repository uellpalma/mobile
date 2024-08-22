import { useMutation } from "@tanstack/react-query";

import { normalizeResponse } from "@/src/services/httpClient";
import { AuthenticateResource, type ForgotPassParams } from "../../../domain";

export const useForgotPass = () => {
  const request = async (params: ForgotPassParams) => {
    const response = await new AuthenticateResource().forgotPass(params);

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
