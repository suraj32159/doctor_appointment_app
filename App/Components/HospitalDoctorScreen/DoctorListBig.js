import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import DoctorCarditem from '../Shared/DoctorCarditem'

export default function DoctorListBig({doctorList}) {
  return (
    <View style={{marginTop:10}}>
      <FlatList 
        data={doctorList}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity>
            <DoctorCarditem doctor={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}