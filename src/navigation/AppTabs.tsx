import { useTheme } from "@react-navigation/native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import {
  CollectionsScreen,
  ExploreScreen,
  HomeScreen,
  SearchScreen,
} from "../screens";
import { AppTabsParams } from "../types/navigation";

const HomeStack = createNativeStackNavigator();
const CollectionsStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator<AppTabsParams>();

const HomeScreenStack = () => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <HomeStack.Screen component={HomeScreen} name="gamesu!" />
    </HomeStack.Navigator>
  );
};

const ExploreScreenStack = () => {
  const { colors } = useTheme();

  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <ExploreStack.Screen component={ExploreScreen} name="Explore" />
    </ExploreStack.Navigator>
  );
};

const CollectionsScreenStack = () => {
  const { colors } = useTheme();

  return (
    <CollectionsStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <CollectionsStack.Screen
        component={CollectionsScreen}
        name="Collections"
      />
    </CollectionsStack.Navigator>
  );
};

const SearchScreenStack = () => {
  const { colors } = useTheme();

  return (
    <SearchStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <SearchStack.Screen component={SearchScreen} name="Search" />
    </SearchStack.Navigator>
  );
};

export const AppTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: false,
        tabBarStyle: {
          backgroundColor: colors.card,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-home" : "md-home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreenStack}
        options={{
          tabBarLabel: "Search",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-search" : "md-search-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="ExploreScreen"
        component={ExploreScreenStack}
        options={{
          tabBarLabel: "Explore",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-albums" : "md-albums-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="CollectionsScreen"
        component={CollectionsScreenStack}
        options={{
          tabBarLabel: "Collections",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-bookmark" : "md-bookmark-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
