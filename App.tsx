import "./global.css";
import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import Routes from "./src/routes";
import { QueryProvider } from "./src/services";

export default function App() {
  return (
    <GluestackUIProvider>
      <QueryProvider>
        <StatusBar style="auto" />
        <Routes />
      </QueryProvider>
    </GluestackUIProvider>
  );
}
