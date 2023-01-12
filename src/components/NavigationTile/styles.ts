import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navigationCard: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rect: { height: "100%", width: 5, marginRight: 5, borderRadius: 5 },
  navigationCardLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navigationCardLeft: { flex: 4.5 / 5 },
  navigationCardRight: {
    flex: 0.5 / 5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
