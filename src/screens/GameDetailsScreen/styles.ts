import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredPage: { justifyContent: "center", alignItems: "center", flex: 1 },
  wrapper: {
    padding: 10,
  },
  image: {
    width: Dimensions.get("screen").width - 30,
    aspectRatio: 1.92 * 0.9,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gameTileWrapper: { marginRight: 10 },
});
