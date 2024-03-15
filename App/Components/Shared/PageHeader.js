import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PageHeader({title,backbutton=true}) {
    const navigation=useNavigation();

  return (
    <View style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
        {backbutton?<TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>:null}
        <Text style={{fontSize:15, fontStyle:'normal', fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
}