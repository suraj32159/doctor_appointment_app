import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Homenavigation from './Homenavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home " component={Homenavigation} options={{tabBarIcon:({color,size}) => <Ionicons name="home" size={size} color={color} />}}/>
      <Tab.Screen name="Appointment" component={Appointment} options={{tabBarIcon:({color,size}) => <Ionicons name="calendar" size={size} color={color} />}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({color,size}) => <FontAwesome name="user-circle-o" size={size} color={color} />}}/>
    </Tab.Navigator>
  );
}
