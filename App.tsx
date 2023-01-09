import { View, Text } from "react-native";
import React from "react";
import { HomeScreen } from "./src/screens";

interface Props {}

const App = (props: Props) => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;
