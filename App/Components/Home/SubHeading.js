import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Color';


export default function SubHeading({subHeadingTitle}) {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{subHeadingTitle}</Text>
        <Text style={{ fontStyle: 'normal', color: Colors.PRIMARY }}>See All</Text>
    </View>
  )
}