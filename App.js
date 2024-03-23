import React from "react";
import { View } from "react-native";
import NavigationRoute from "./App/Screens/NavigationRoute" 
import { useFonts } from "expo-font";

import { ActivityIndicator, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignInScreen from './App/Screens/SignInScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf')
  });

  const [userInfo, setUserInfo]= React.useState();
  const [loading, setLoading] = React.useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:'882530390257-uclmg9pj7rv68ma8ici4k7dk276b0lc2.apps.googleusercontent.com'
  })

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem('@user', (error, result) => {
        if(error) console.error('Something went wrong!');
        else if(result) console.log('Getting key was successfull', result);
        else if(result === null) console.log('Key does not exists!');
      });
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("userData", userData)
      setUserInfo(userData);
    } catch (e) {
      console.log(e, "Error getting local user");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (response?.type == "success"){
      const { id_token } = response.params;
      const credentials = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credentials)
    }
  }, [response])

  React.useEffect(() => {
    getLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log("user not authenticated");
      }
    });
    return () => unsub();
  }, []);
  
  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  return userInfo ? <NavigationRoute /> : <SignInScreen promptAsync={promptAsync} />;
}
