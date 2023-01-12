import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { FC } from "react";

import { styles } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../../types/api";
import { API_KEY } from "@env";
import { BASE_URL, currentDate, lastYear } from "../../utils/api";
import { SafeArea, Typography, GameTile, Spacer } from "../../components";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParams } from "../../types/navigation";
interface Props {}

interface IResponse {
  results: Game[];
  next: string;
}

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
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
        `${BASE_URL}/games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released`
      ).then((res) => {
        return res.json();
      }),
  };
  const {
    data: popularGames,
    isLoading,
    isError,
  } = useQuery<IResponse | null>(["popularGames"], gamesApi.fetchPopularGames);

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
      <ScrollView>
        <View>
          <Spacer y={20} />
          <View style={styles.row}>
            <Typography variant="bold" size={22}>
              Popular
            </Typography>
            <Typography color="primary" size={16} onPress={() => {}}>
              See More
            </Typography>
          </View>
        </View>

        <FlatList
          horizontal
          data={popularGames?.results}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push("GameDetailsScreen", {
                  id: item.id,
                  title: item.name,
                })
              }
              style={[
                styles.gameTileWrapper,
                { marginLeft: index === 0 ? 10 : 0 },
              ]}
            >
              <GameTile game={item} />
            </TouchableOpacity>
          )}
        />

        <View>
          <Spacer y={20} />
          <View style={styles.row}>
            <Typography variant="bold" size={22}>
              New Releases
            </Typography>
            <Typography color="primary" size={16} onPress={() => {}}>
              See More
            </Typography>
          </View>
        </View>

        <FlatList
          horizontal
          data={newGames?.results}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push("GameDetailsScreen", {
                  id: item.id,
                  title: item.name,
                })
              }
              style={[
                styles.gameTileWrapper,
                { marginLeft: index === 0 ? 10 : 0 },
              ]}
            >
              <GameTile game={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;
