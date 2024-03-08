import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import app from '../../assets/images/app.jpg';
import Colors from '../../assets/Shared/Color';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '../Navigations/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Image source={app} style={styles.appImage} />
        <View style={{ backgroundColor: '#fff', padding: 25, alignItems: 'center' }}>
          <Text style={styles.heading}>Your Ultimate Doctor</Text>
          <Text style={styles.heading}>Appointment Booking App</Text>
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Book Appointment Effortlessly and manage your health journey</Text>
          <TouchableOpacity 
          onPress={()=>console.log("Clicked")}
          style={{padding:16,
          backgroundColor:Colors.lightGreen, 
          borderRadius:90, 
          alignItems:'center', 
          marginTop:150, 
          width:Dimensions.get('screen').width*0.8}}>
            <Text style={{fontSize:17, color:Colors.white}}>Go To Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 0
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
