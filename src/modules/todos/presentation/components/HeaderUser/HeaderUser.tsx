import { TouchableOpacity } from "react-native";

import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

import { HeaderUserProps } from "./HeaderUser.types";

export const HeaderUser = ({ userName, onPressProfile }: HeaderUserProps) => {
  return (
    <HStack className="content-center items-center justify-between">
      <VStack>
        <Text size="xl" className="mb-0">
          Olá {userName} 👋
        </Text>
        <Heading size="2xl">Gerencie seus to-dos</Heading>
      </VStack>

      <TouchableOpacity onPress={onPressProfile}>
        <Avatar size="md">
          <AvatarFallbackText>Jane Doe</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </Avatar>
      </TouchableOpacity>
    </HStack>
  );
};
