import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { StatusBar, useColorScheme } from "react-native";

import { AppStack } from "./AppStack";

export const Routes = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer>
      <AppStack />
      {/** @ts-ignore **/}
      <StatusBar />
    </NavigationContainer>
  );
};
