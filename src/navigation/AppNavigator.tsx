import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATION } from "@/navigation/constants";
import { Home } from "@/screens";

const Stack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
