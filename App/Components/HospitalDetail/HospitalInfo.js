import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Colors from '../../../assets/Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import SubHeading from './SubHeading';



export default function HospitalInfo({hospital}) {
  return hospital&&(
      <View>
          <Text style={{
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: 'bold'
          }}>{hospital.name}</Text>
          <FlatList
              data={hospital.category}
              horizontal={true}
              renderItem={({ item }) => (
                  <Text style={{
                      marginRight: 10, color: Colors.GRAY
                  }}>{item.name}</Text>
              )}
          />
          <View style={{ borderColor: Colors.GRAY, margin: 5, marginBottom: 1 }}></View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <Ionicons name="location" size={14} color={Colors.PRIMARY} />
              <Text style={{ fontSize: 12, fontStyle: 'normal', color: Colors.GRAY }}>{hospital.address}</Text>
          </View>
          <View style={{ borderColor: Colors.GRAY, margin: 5, marginBottom: 1 }}></View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <Ionicons name="time" size={14} color={Colors.PRIMARY} />
              <Text style={{ fontSize: 12, fontStyle: 'normal', color: Colors.GRAY }}>Mon Sun | 11AM - 8PM</Text>
          </View>

          <View style={{
            borderBottomWidth: 1,
            borderColor: Colors.LIGHT_GRAY, 
            margin: 5,
            marginBottom: 15,
            marginTop: 10
          }}/>
          <ActionButton/>

          <View style={{
            marginTop:15,
            borderColor:Colors.LIGHT_GRAY, margin: 5, marginTop:20
          }}>
          </View>
          <SubHeading subHeadingTitle={'About'}/>
          <Text style={{marginTop:10, color:Colors.GRAY}}>{hospital.about}</Text>
      </View>
  )
}