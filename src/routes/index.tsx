import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React, { useEffect, useMemo, useState } from "react";

import PrivateStack from "./private";
import PublicStack from "./public";
import { RootStackParamList } from "./types";
import { LoginState } from "../modules/common";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef();

const RootStackScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<object | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setUserData(null);
    }, 4000);
  }, []);

  const screenOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerShadowVisible: false,
      headerTitleStyle: {
        fontSize: 20,
      },
    }),
    []
  );

  if (isLoading) {
    return <LoginState />;
  }

  const routes = {
    ...(userData ? PrivateStack : PublicStack),
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={screenOptions}>
        {Object.entries(routes).map(([name, configs]) => (
          <Stack.Screen key={name} name={name} {...configs} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
