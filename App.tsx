import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./src/navigation/Routes";

interface Props {}

const queryClient = new QueryClient();

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
