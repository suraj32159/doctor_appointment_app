import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmljLazI3-Wa4jpIRdZD7DeKbfisn7NaU",
  authDomain: "tutorial-signin-cc863.firebaseapp.com",
  projectId: "tutorial-signin-cc863",
  storageBucket: "tutorial-signin-cc863.appspot.com",
  messagingSenderId: "556967771625",
  appId: "1:556967771625:web:0bfbf8d1b40d3f74255f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { app, auth, getApp, getAuth };