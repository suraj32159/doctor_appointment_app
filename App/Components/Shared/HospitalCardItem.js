import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../../../assets/Shared/Color';
import { Ionicons } from '@expo/vector-icons';

export default function HospitalCardItem({ hospital }) {
    return (
        <View style={{ borderRadius: 20, marginBottom: 20, backgroundColor: 'white' }}>
            <View style={{ aspectRatio: 16 / 9 }}>
                <Image
                    source={hospital.imageUrl}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        borderColor: Colors.GRAY,
                    }}
                    resizeMode="cover"
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{hospital.name}</Text>
                <FlatList
                    data={hospital.category}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Text style={{ marginRight: 10, color: Colors.GRAY }}>{item.name}</Text>
                    )}
                />
                <View style={{ borderBottomWidth: 1, borderColor: Colors.GRAY, marginVertical: 5 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="location" size={14} color={Colors.PRIMARY} />
                    <Text style={{ fontSize: 10 }}>{hospital.address}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="eye" size={14} color={Colors.PRIMARY} />
                    <Text style={{ fontSize: 10 }}>658</Text>
                </View>
            </View>
        </View>
    );
}
