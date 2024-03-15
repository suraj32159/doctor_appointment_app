import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Shared/PageHeader'
import Colors from '../../../assets/Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import HorizontalLine from '../Shared/HorizontalLine';
import ActionButton from '../HospitalDetail/ActionButton';

export default function AppointmentHospitalInfo({hospital}) {
  return (
    <View>
      <PageHeader title={'Book Appointment'}/>
      <View style={{marginTop:10, display:'flex', flexDirection:'row', gap:15}}>
        <Image
                source={hospital.hospital.imageUrl}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 99
                }}
            />
            <View>
                <Text style={{marginTop:5, fontSize:15, fontWeight:'bold'}}>{hospital.hospital.name}</Text>
                <View style={{ marginTop:5, display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Ionicons name="location" size={14} color={Colors.PRIMARY} />
                    <Text style={{ fontSize: 12, fontStyle: 'normal', color: Colors.GRAY, width:'80%'}}>{hospital.hospital.address}</Text>
                </View>
            </View>
        </View>
        <HorizontalLine/>
        <ActionButton/>
        <HorizontalLine/>
    </View>
  )
}