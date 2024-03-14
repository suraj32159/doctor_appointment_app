import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import app from '../../assets/images/app/app.jpg';
import Colors from '../../assets/Shared/Color';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '../Navigations/TabNavigation';
import { useNavigation } from '@react-navigation/native';
import Homenavigation from '../Navigations/Homenavigation';


export default function NavigationRoute() {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
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
