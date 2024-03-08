import React from "react";
import { StyleSheet } from "react-native";
import Login from "./App/Screens/Login" 
export default function App() {
  return (
    <Login></Login>
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