import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Color';



export default function ActionButton() {
    const actionButtonList=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:3,
            name:'Phone',
            icon:'phone-portrait'
        },
        {
            id:4,
            name:'Direction',
            icon:'map'
        },
        {
            id:5,
            name:'Share',
            icon:'share'
        }
    ]
  return (
    <View>
      <FlatList
        data={actionButtonList}
        columnWrapperStyle={{
            flex:1,
            justifyContent:'space-between'
        }}
        numColumns={5}
        renderItem={({item})=>(
            <TouchableOpacity style={{alignItems:'center' }}>
                <View style={{
                    backgroundColor:Colors.SECONDARY,
                    padding:10,
                    borderRadius:99,
                    alignItems:'center'
                }}>
                    <Ionicons name={item.icon} size={15} color={Colors.PRIMARY} />
                </View>
                <Text style={{ fontSize: 10, fontStyle: 'normal', color: 'black'}}>{item.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}