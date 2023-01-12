import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
  GameDetailsScreen,
  GameScreenshotsScreen,
  SettingsScreen,
} from "../screens";
import { AppStackParams } from "../types/navigation";
import { AppTabs } from "./AppTabs";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetailsScreen"
        component={GameDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
        })}
      />
      <Stack.Screen
        name="GameScreenshotsScreen"
        component={GameScreenshotsScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
        })}
      />

      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};
