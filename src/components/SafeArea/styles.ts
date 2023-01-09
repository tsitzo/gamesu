import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight && StatusBar.currentHeight,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 30 : 0,
  },
});
