type Game = any;

export type AppTabsParams = {
  HomeScreen: undefined;
  CollectionsScreen: undefined;
  ExploreScreen: undefined;
  SearchScreen: undefined;
};

export type AppStackParams = {
  AppTabs: undefined;
  GameDetailsScreen: { id: number; title: string };
  GameScreenshotsScreen: { id: number; title: string };
  SettingsScreen: undefined;
  SettingsThemeScreen: undefined;
  SettingsGenresScreen: undefined;
  SettingsPlatformsScreen: undefined;
  SeeMoreGamesScreen: { games: Game[]; name: string };
};
