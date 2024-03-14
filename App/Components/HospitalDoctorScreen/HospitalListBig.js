import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import HospitalCardItem from '../Shared/HospitalCardItem'
import { useNavigation } from '@react-navigation/native';

export default function HospitalListBig({hospitalList}) {
  const navigation=useNavigation();
  return (
    <View style={{marginTop:10}}>
      <FlatList 
        data={hospitalList}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => navigation.navigate('hospital-details',
            {
              hospital:item
            }
          )}>
            <HospitalCardItem hospital={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}