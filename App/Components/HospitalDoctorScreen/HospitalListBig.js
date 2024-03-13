import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import HospitalCardItem from '../Shared/HospitalCardItem'

export default function HospitalListBig({hospitalList}) {
  return (
    <View>
      <FlatList 
        data={hospitalList}
        renderItem={({item})=>(
          <TouchableOpacity>
            <HospitalCardItem hospital={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}