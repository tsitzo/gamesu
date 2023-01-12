import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Spacer, Typography } from "..";

interface INavigationTileProps {
  label: string;
  value?: string;
  onPress: () => void;
}

const NavigationTile: FC<INavigationTileProps> = ({
  label,
  value,
  onPress,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.navigationCard, { backgroundColor: colors.card }]}
      onPress={onPress}
    >
      <View style={[styles.navigationCardLeft]}>
        <View style={styles.navigationCardLabelRow}>
          <View style={[styles.rect, { backgroundColor: colors.primary }]} />
          <Spacer x={3} />
          <Typography variant="bold">{label}</Typography>
        </View>
        {value && (
          <>
            <Spacer y={5} />
            <Typography size={14}>{value}</Typography>
          </>
        )}
      </View>
      <View style={styles.navigationCardRight}>
        <Entypo name="chevron-right" size={20} color={colors.subtext} />
      </View>
    </TouchableOpacity>
  );
};

export default NavigationTile;
