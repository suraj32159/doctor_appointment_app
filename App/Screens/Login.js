import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import app from '../../assets/images/app/app.jpg';
import Colors from '../../assets/Shared/Color';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";


export default function Login() {
  const [userInfo, setUserInfo]= React.useState();
  const [loading, setLoading] = React.useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:'882530390257-uclmg9pj7rv68ma8ici4k7dk276b0lc2.apps.googleusercontent.com'
  })

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
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

  const navigation=useNavigation();
  return (
      <View style={styles.container}>
        <Image source={app} style={styles.appImage} />
        <View style={{ backgroundColor: '#fff', padding: 25, alignItems: 'center' }}>
          <Text style={styles.heading}>Your Ultimate Doctor</Text>
          <Text style={styles.heading}>Appointment Booking App</Text>
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Book Appointment Effortlessly and manage your health journey</Text>
          <TouchableOpacity 
          onPress={() => promptAsync()}
          style={{padding:16,
          backgroundColor:Colors.lightGreen, 
          borderRadius:90, 
          alignItems:'center', 
          marginTop:150, 
          width:Dimensions.get('screen').width*0.8}}>
            <Text style={{fontSize:17, color:Colors.white}}>Sign In with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 0,
  },
  appImage: {
    paddingTop: 35,
    width: 400,
    height: 400,
    resizeMode: 'contain', // Use resizeMode instead of objectFit for Image component
    marginTop: 0,
    borderRadius: 20,
    borderWidth: 6,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});
