import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "@/navigation/AppNavigator";
import { AuthNavigator } from "@/navigation/AuthNavigator";

export const RootNavigator = (): React.ReactElement => {
  const user = false; // dummy

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
