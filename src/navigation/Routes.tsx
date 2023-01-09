import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { CustomDarkTheme } from "../theme";

import { AppStack } from "./AppStack";

export const Routes = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <AppStack />
      {/** @ts-ignore **/}
      <StatusBar barStyle={"light-content"} />
    </NavigationContainer>
  );
};
