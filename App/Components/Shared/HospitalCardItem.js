import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Colors from '../../../assets/Shared/Color';
import { ScrollView } from 'react-native-virtualized-view'
import { Ionicons } from '@expo/vector-icons';

export default function HospitalCardItem({hospital}) {
    return (
        <ScrollView style={{borderRadius:10, marginBottom:20}}>
            <Image source={hospital.imageUrl} 
            style={{
                width: '100%',
                height:140,
                borderTopLeftRadius:10,
                borderTopRightRadius:10
            }}/>
        <View style={{padding:10}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{hospital.name}</Text>
            <FlatList
                data={hospital.category}
                horizontal={true}
                renderItem={({item}) => (
                    <Text style={{marginRight:10,color:Colors.GRAY}}>{item.name}</Text>
                )}
            />
            <View style={{borderBottomWidth:1,borderColor:Colors.GRAY, margin:5, marginBottom:1}}></View>
            <View style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
            <Ionicons name="location" size={24} color={Colors.PRIMARY} />
            <Text>{hospital.address}</Text>
            </View>
        </View>
        </ScrollView>
    )
}