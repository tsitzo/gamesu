import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardWrapper: {
    width: (Dimensions.get("screen").width * 3) / 5,
    aspectRatio: 1.92 / 1.08,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeHolderImage: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    zIndex: 0,
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  imageWrapper: {
    borderRadius: 5,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
