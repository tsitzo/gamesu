import React, { FC } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

const SafeArea: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

export default SafeArea;
