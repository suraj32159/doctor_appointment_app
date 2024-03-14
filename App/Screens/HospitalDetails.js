import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/Shared/PageHeader';
import { useRoute } from '@react-navigation/native'
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';
import Colors from '../../assets/Shared/Color';


export default function HospitalDetails() {
    const [hospital, setHospital]=useState(null); // Initialize hospital state with null
    const param=useRoute().params;

    useEffect(()=>{
        if (param && param.hospital) {
            setHospital(param.hospital);
        }
    }, [param]); // Update hospital state only when param changes

    return hospital&&(
        <View>
            <View style={{position:'absolute',zIndex:10, margin:15}}>
                <PageHeader title={''} />
            </View>
            {hospital && ( // Conditional rendering to ensure hospital is not null or undefined
                <View>
                    <Image source={hospital.imageUrl} 
                    style={{
                        width:'100%',
                        height:260
                    }}
                    />
                </View>
            )}
            <View style={{marginTop:-20,
            width:'100%',
                backgroundColor:Colors.white,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                padding:20}}>
                <HospitalInfo hospital={hospital}/>
            </View>
        </View>
    )
}
