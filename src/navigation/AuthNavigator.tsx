import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATION } from "@/navigation/constants";
import { Login } from "@/screens";

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.login}
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
