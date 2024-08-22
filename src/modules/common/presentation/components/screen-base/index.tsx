import { SafeAreaView } from "react-native";
import { PropsWithChildren } from "react";
import { Box } from "@/components/ui/box";

export const ScreenBase = ({ children }: PropsWithChildren) => {
  return (
    <Box className="bg-background-100 flex-1 p-5">
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </Box>
  );
};
