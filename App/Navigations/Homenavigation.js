import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';
import HospitalDetails from '../Screens/HospitalDetails';
import BookAppointment from '../Screens/BookAppointment';
import CheckoutScreen from '../Screens/CheckOutScreen'

const Stack=createStackNavigator();
export default function Homenavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='hospital-details' component={HospitalDetails} />
        <Stack.Screen name='hospital-doctor-list-screen' component={HospitalDoctorsListScreen} />
        <Stack.Screen name='book-appointment' component={BookAppointment} />
        <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} />
    </Stack.Navigator>
  )
}