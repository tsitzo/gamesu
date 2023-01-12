import { API_KEY } from "@env";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GameTile,
  NavigationTile,
  SafeArea,
  Spacer,
  Typography,
} from "../../components";
import { Game, Video } from "../../types/api";
import { AppStackParams } from "../../types/navigation";
import { BASE_URL } from "../../utils/api";
import { styles } from "./styles";

import { Video as VideoPlayer } from "expo-av";
import dayjs from "dayjs";

interface IVideosResponse {
  results: Video[];
  next: string;
}

interface ISimilarGamesResponse {
  results: Game[];
  next: string;
}
interface IGameDetailsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "GameDetailsScreen">;
  route: RouteProp<AppStackParams, "GameDetailsScreen">;
}

const GameDetailsScreen: FC<IGameDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { id } = route.params;
  const { colors } = useTheme();

  const fetchGameDetails = () =>
    fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`).then((res) => {
      return res.json();
    });

  const fetchSimilarGames = () =>
    fetch(`${BASE_URL}/games/${id}/game-series?key=${API_KEY}`).then((res) => {
      return res.json();
    });

  const fetchGameVideos = () =>
    fetch(`${BASE_URL}/games/${id}/movies?key=${API_KEY}`).then((res) => {
      return res.json();
    });

  const {
    data: game,
    isLoading,
    isError,
  } = useQuery<Game | null>(["game", id], fetchGameDetails);

  const { data: videos } = useQuery<IVideosResponse | null>(
    ["gameVideos", id],
    fetchGameVideos
  );

  const { data: similarGames } = useQuery<ISimilarGamesResponse | null>(
    ["similarGames", id],
    fetchSimilarGames
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
        <View style={styles.wrapper}>
          <View>
            {videos?.results.length === 0 ? (
              <Image
                source={{ uri: game?.background_image }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <VideoPlayer
                style={styles.image}
                source={{
                  uri: videos?.results[0].data.max!,
                }}
                useNativeControls
                isLooping
              />
            )}
          </View>
        </View>

        <View style={styles.wrapper}>
          <Typography size={14}>{game?.description_raw}</Typography>
        </View>

        <View style={styles.wrapper}>
          <NavigationTile
            onPress={() =>
              navigation.push("GameScreenshotsScreen", {
                id: game?.id!,
                title: game?.name!,
              })
            }
            label="Screenshots"
          />
        </View>

        {similarGames && similarGames.results.length > 0 && (
          <>
            <View style={styles.wrapper}>
              <Typography variant="bold" size={22}>
                Related games
              </Typography>
            </View>

            <FlatList
              horizontal
              data={similarGames?.results}
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
          </>
        )}
      </ScrollView>
    </SafeArea>
  );
};

export default GameDetailsScreen;
