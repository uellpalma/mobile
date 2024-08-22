import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export const LoginState = () => {
  return (
    <Box className="flex-1">
      <Center className="flex-1">
        <VStack space="sm">
          <Spinner />
          <Text size="lg">Carregando...</Text>
        </VStack>
      </Center>
    </Box>
  );
};
