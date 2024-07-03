import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import NavigationRoute from "./App/Screens/NavigationRoute";
import { useFonts } from "expo-font";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignInScreen from './App/Screens/SignInScreen';
import Api from "./App/Services/Api";

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf')
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '882530390257-uclmg9pj7rv68ma8ici4k7dk276b0lc2.apps.googleusercontent.com'
  });

  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const registerUser = async (user) => {
    try {
      const fullName = user.displayName.split(" ");
      const firstName = fullName[0];
      const lastName = fullName.slice(1).join(" ");

      const userData = {
        username: user.email.split('@')[0],
        email: user.email,
        first_name: firstName,
        last_name: lastName,
      };

      await Api.registerUser(userData);
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };

  const checkLocalUser = async () => {
    try {
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("Local storage user: ", userData);
      setUserInfo(userData);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLocalUser();
  }, []);

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credentials = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credentials).catch((error) => {
        console.error("Failed to sign in with Google credentials:", error);
      });
    }
  }, [response]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        await registerUser(user);
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });
    return () => unsub();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return userInfo ? <NavigationRoute /> : <SignInScreen promptAsync={promptAsync} />;
}
