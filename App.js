import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationRoute from "./App/Screens/NavigationRoute" 
import Login from "./App/Screens/Login" 
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf')
  });

  if (!fontsLoaded) {
    console.log("Fonts not loaded!");
    // You can also return a placeholder view or display an error message here
  }

  return (
    <NavigationRoute />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
