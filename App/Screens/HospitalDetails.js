import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/Shared/PageHeader';
import { useRoute } from '@react-navigation/native'
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';
import Colors from '../../assets/Shared/Color';
import { useNavigation } from '@react-navigation/native';

export default function HospitalDetails() {
    const navigation=useNavigation();
    const [hospital, setHospital] = useState(null);
    const param = useRoute().params;

    useEffect(() => {
        if (param && param.hospital) {
            setHospital(param.hospital);
        }
    }, [param]);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={{ position: 'absolute', zIndex: 10, margin: 15 }}>
                <PageHeader title={''} />
            </View>
            {hospital && (
                <View>
                    <Image source={hospital.imageUrl}
                        style={{
                            width: '100%',
                            height: 260
                        }}
                    />
                </View>
            )}
            <View style={{
                marginTop: -20,
                width: '100%',
                backgroundColor: Colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
                flex: 1
            }}>
                <HospitalInfo hospital={hospital} />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('book-appointment', {
                    hospital:hospital})
                }
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 13,
                    backgroundColor: Colors.PRIMARY,
                    margin: 10,
                    borderRadius: 99,
                    marginBottom: 20,
                    zIndex: 20
                }}
            >
                <Text style={{ color: Colors.white, textAlign: 'center', fontSize: 12 }}>Book Appointment</Text>
            </TouchableOpacity>
        </View>
    )
}
