import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function DoctorCardItem({ doctor }) {
    return (
        <View style={{ borderRadius: 20, marginBottom: 20, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={doctor.imageUrl} 
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: 10,
                        borderColor: Colors.GRAY,
                        marginRight: 10,
                    }}
                />
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginBottom: 5 }}>
                        <FontAwesome6 name="user-doctor" size={14} color={Colors.PRIMARY} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{doctor.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <MaterialIcons name="description" size={14} color={Colors.PRIMARY} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>{doctor.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Ionicons name="heart" size={14} color={Colors.LIGHT_RED} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>658</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: Colors.LIGHT_PRIMARY, padding: 5, marginTop:10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Make Appointment</Text>
            </TouchableOpacity>
        </View>
    )
}
