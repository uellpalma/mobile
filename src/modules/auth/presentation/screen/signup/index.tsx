import React, { useCallback } from "react";

import { Link, LinkText } from "@/components/ui/link";
import {
  InputControl,
  ScreenBase,
  useOptionsScreen,
} from "@/src/modules/common";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/src/services";
import { useRegisterFormSubmit } from "../../../application";

export const SignUpScreen = () => {
  const navigation = useNavigation();
  const { isPendingRegister, onSubmit } = useRegisterFormSubmit();

  const form = useForm({
    resolver: yupResolver(registerSchema),
  });

  useOptionsScreen({
    title: "",
  });

  const handleNavigateSignUp = useCallback(() => {
    navigation.navigate("SignIn");
  }, []);

  return (
    <ScreenBase>
      <Box className="my-5">
        <Heading size="2xl">Crie uma conta ✍️</Heading>
        <Text size="lg">Crie uma conta para acessar o app</Text>
      </Box>

      <VStack space="xl">
        <Box className="gap-5 mb-6">
          <InputControl
            name="name"
            label="Nome"
            control={form.control}
            formState={form.formState}
          />

          <InputControl
            name="email"
            label="Email"
            keyboardType="email-address"
            inputMode="email"
            autoCapitalize="none"
            control={form.control}
            formState={form.formState}
          />

          <InputControl
            name="password"
            label="Senha"
            control={form.control}
            formState={form.formState}
            autoCapitalize="none"
            secureTextEntry
          />
        </Box>

        <Button
          size="xl"
          variant="solid"
          action="primary"
          disabled={isPendingRegister}
          onPress={form.handleSubmit(onSubmit)}
        >
          <ButtonText>Cadastrar</ButtonText>
        </Button>

        <HStack className="justify-self-end justify-center">
          <Text size="lg">Já possui uma conta? </Text>

          <Link onPress={handleNavigateSignUp}>
            <LinkText size="lg">Faça o login</LinkText>
          </Link>
        </HStack>
      </VStack>
    </ScreenBase>
  );
};
