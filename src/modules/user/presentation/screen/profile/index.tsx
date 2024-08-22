import React from "react";

import { Heading } from "@/components/ui/heading";
import { ScreenBase } from "@/components/screen-base";
import { useOptionsScreen } from "@/src/modules/common";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";

export const ProfileScreen = () => {
  useOptionsScreen({
    title: "Perfil",
  });

  return (
    <ScreenBase>
      <VStack className="mt-9 content-center items-center justify-between">
        <Avatar size="2xl" className="mb-2">
          <AvatarFallbackText>Jane Doe</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </Avatar>

        <VStack>
          <Heading size="xl" className="mb-0">
            Jane Doe
          </Heading>
        </VStack>
      </VStack>

      <Box className="absolute bottom-9 items-end w-full">
        <Button variant="link" size="md" className="p-0">
          <ButtonText>Sair</ButtonText>
          <ButtonIcon className="mr-1" size="md" as={ArrowRightIcon} />
        </Button>
      </Box>
    </ScreenBase>
  );
};
