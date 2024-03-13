import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import patient from '../../../assets/images/app/patient.jpg';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {isLoaded, isSignIn, user} = useUser
  return (
    <View style={{display: 'flex', flexDirection:'row', gap:7, alignItems:'center', justifyContent:'space-between'}}>
        <View style={{display: 'flex', flexDirection:'row', gap:7, alignItems:'center'}}>
            <View style={{padding:5, marginTop:0}}>
                <Image source={patient} style={{width: 35, height: 35, borderRadius: 99}} />
            </View>
            <View>
                <Text style={{fontSize:10}}>Hello,</Text>
                <Text style={{fontSize:11, fontWeight: 'bold'}}>Suraj Singh</Text>
            </View>
        </View>
        <Ionicons name="notifications" size={24} color="black" />
    </View>
  )
}