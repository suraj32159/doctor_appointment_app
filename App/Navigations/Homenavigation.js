import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';
import Login from '../Screens/Login';
import TabNavigation from './TabNavigation';

const Stack=createStackNavigator();
export default function Homenavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={TabNavigation} />
        <Stack.Screen name='hospital-doctor-list-screen' component={HospitalDoctorsListScreen} />
    </Stack.Navigator>
  )
}