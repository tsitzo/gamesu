import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { styles } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../../types/api";
import { API_KEY } from "@env";
import { BASE_URL, currentDate, lastYear } from "../../utils/api";
import { SafeArea, Typography } from "../../components";
import { useTheme } from "@react-navigation/native";
import { GameTile } from "../../components/GameTile";
interface Props {}

interface IResponse {
  results: Game[];
  next: string;
}

const HomeScreen = (props: Props) => {
  const { colors } = useTheme();

  const gamesApi = {
    fetchPopularGames: () =>
      fetch(
        `${BASE_URL}/games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating`
      ).then((res) => {
        return res.json();
      }),

    fetchNewGames: () =>
      fetch(
        `${BASE_URL}/games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-release`
      ).then((res) => {
        return res.json();
      }),
  };
  const {
    data: upcomingGames,
    isLoading,
    isError,
  } = useQuery<IResponse | null>(["upcomingGames"], gamesApi.fetchPopularGames);

  const { data: newGames } = useQuery<IResponse | null>(
    ["newGames"],
    gamesApi.fetchNewGames
  );

  if (isLoading)
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <ActivityIndicator size={60} color={colors.primary} />
        </View>
      </SafeArea>
    );

  if (isError && !isLoading)
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <Typography>An error has occured</Typography>
        </View>
      </SafeArea>
    );

  return (
    <SafeArea>
      <FlatList
        horizontal
        data={upcomingGames?.results}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.gameTileWrapper,
              { marginLeft: index === 0 ? 10 : 0 },
            ]}
          >
            <GameTile game={item} />
          </TouchableOpacity>
        )}
      />

      <FlatList
        horizontal
        data={newGames?.results}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.gameTileWrapper,
              { marginLeft: index === 0 ? 10 : 0 },
            ]}
          >
            <GameTile game={item} />
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default HomeScreen;
