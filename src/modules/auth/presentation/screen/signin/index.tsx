import React, { useCallback } from "react";

import { Link, LinkText } from "@/components/ui/link";
import { InputControl, ScreenBase, useOptionsScreen } from "../../../../common";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLoginFormSubmit } from "../../../application";
import { loginSchema } from "../../../../../services/auth";

export const SingInScreen = () => {
  const navigation = useNavigation();
  const { onSubmit, isPendingLogin } = useLoginFormSubmit();

  const form = useForm({
    resolver: yupResolver(loginSchema),
  });

  useOptionsScreen({
    headerShown: false,
  });

  const handleNavigateSignUp = useCallback(() => {
    navigation.navigate("SignUp");
  }, []);

  const handleNavigateForgotPass = useCallback(() => {
    navigation.navigate("ForgotPass");
  }, []);

  return (
    <ScreenBase>
      <Box className="my-5">
        <Heading size="2xl">Ei, bem vindo de volta 👋</Heading>
        <Text size="lg">Faça login para gerenciar suas tarefas</Text>
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

          <InputControl
            name="password"
            label="Senha"
            control={form.control}
            formState={form.formState}
            autoCapitalize="none"
            secureTextEntry
          />

          <HStack space="md" className="justify-end">
            <Link onPress={handleNavigateForgotPass}>
              <LinkText size="lg">Esqueci a senha</LinkText>
            </Link>
          </HStack>
        </Box>

        <Button
          size="xl"
          variant="solid"
          action="primary"
          disabled={isPendingLogin}
          onPress={form.handleSubmit(onSubmit)}
        >
          <ButtonText>Login</ButtonText>
        </Button>

        <HStack className="justify-self-end justify-center">
          <Text size="lg">Não tem uma conta? </Text>
          <Link onPress={handleNavigateSignUp}>
            <LinkText size="lg">Registre-se agora</LinkText>
          </Link>
        </HStack>
      </VStack>
    </ScreenBase>
  );
};
