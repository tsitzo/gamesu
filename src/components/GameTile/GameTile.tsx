import { useTheme } from "@react-navigation/native";
import dayjs from "dayjs";
import React, { FC, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { Game } from "../../types/api";
import { getPlatformIcon } from "../../utils/misc";
import { Spacer } from "../Spacer";
import { Typography } from "../Typography";
import { styles } from "./styles";

interface IGameTileProps {
  game: Game;
}

const GameTile: FC<IGameTileProps> = ({ game }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.coverWrapper}>
      <Image
        resizeMode="cover"
        source={{
          uri: game.background_image,
        }}
        style={styles.image}
      />

      <Spacer y={10} />

      <View style={{}}>
        <Typography numberOfLines={1} variant="bold">
          {game.name}
        </Typography>
        <Spacer y={3} />
        <View style={styles.row}>
          <Typography color="subtext" size={12}>
            {dayjs(game.released).format("DD MMM YYYY")}
          </Typography>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {game.parent_platforms &&
              game.parent_platforms.map((el) =>
                getPlatformIcon(el.platform.id, colors.subtext, 12)
              )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameTile;
