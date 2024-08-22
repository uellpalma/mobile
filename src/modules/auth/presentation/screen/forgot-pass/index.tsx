import React from "react";

import {
  InputControl,
  ScreenBase,
  useOptionsScreen,
} from "@/src/modules/common";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPassSchema } from "@/src/services";
import { useForgotPassFormSubmit } from "../../../application";

export const ForgotPassScreen = () => {
  useOptionsScreen({
    title: "",
  });

  const { isPendingSending, onSubmit } = useForgotPassFormSubmit();

  const form = useForm({
    resolver: yupResolver(forgotPassSchema),
  });

  return (
    <ScreenBase>
      <Box className="my-5">
        <Heading size="2xl">Esqueceu a senha? 👋</Heading>
        <Text size="lg">Coloque seu email de cadastro e recupere</Text>
      </Box>

      <VStack space="xl">
        <Box className="gap-5 mb-6">
          <InputControl
            name="email"
            label="Email"
            control={form.control}
            formState={form.formState}
            keyboardType="email-address"
            inputMode="email"
            autoCapitalize="none"
          />
        </Box>

        <Button
          size="xl"
          variant="solid"
          action="primary"
          disabled={isPendingSending}
          onPress={form.handleSubmit(onSubmit)}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
    </ScreenBase>
  );
};
