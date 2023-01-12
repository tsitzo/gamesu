import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coverWrapper: {
    maxWidth: (Dimensions.get("screen").width * 3) / 5,
  },
  image: {
    width: (Dimensions.get("screen").width * 3) / 5,
    height: 130,
    overflow: "hidden",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
