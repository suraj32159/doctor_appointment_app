import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Color';


export default function Hospitalitem({hospital}) {
    return (
    <View style={{width:200, borderRadius: 20, marginRight:10, borderWidth:1, borderColor:Colors.LIGHT_GRAY}}>
        <Image source={hospital.imageUrl} style={{width: '100%', height:110, borderTopLeftRadius: 20, borderTopRightRadius: 20}}/>
        <View style={{padding:7}}>
            <Text style={{fontStyle:'normal', fontSize:15, fontWeight: 'bold'}}>{hospital.name}</Text>
            <Text style={{color:Colors.GRAY}}>{hospital.address}</Text>
        </View>
    </View>
  )
}