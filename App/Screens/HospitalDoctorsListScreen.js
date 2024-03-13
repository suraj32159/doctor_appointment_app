import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorScreen/HospitalListBig';
import Colors from '../../assets/Shared/Color';


export default function HospitalDoctorsListScreen() {
  const hospitalList = [
    {
        id: 1,
        name: "Shalby",
        address : 'Sarkhej - Gandhinagar Hwy, opp. Karnavati Club, Ramdev Nagar, Ahmedabad, Gujarat 380015',
        imageUrl: require('../../assets/images/hospital/hospital.jpg'),
        category:{'name':'Dentist'}
    },
    {
        id: 2,
        name: 'Appolo',
        address: '12, Shanti Sadan Co-op Housing Soc limited, Akshara Complex, Parimal Underpass, near Parimal Garden, Ellisbridge, Ahmedabad, Gujarat 380006',
        imageUrl: require('../../assets/images/hospital/hospital1.jpg'),
        category:{'name':'Veda'}
    },
    {
        id: 3,
        name: 'KD',
        address: 'Vaishnodevi Circle, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 382421',
        imageUrl: require('../../assets/images/hospital/hospital2.jpg'),
        category:{'name':'Dentist'}
    },
    {
        id: 4,
        name: 'Zydus',
        address: 'Zydus Hospital Rd, Sola, Ahmedabad, Gujarat 380059',
        imageUrl: require('../../assets/images/hospital/hospital3.jpg'),
        category:{'name':'Dentist'}
    },
    {
        id: 5,
        name: 'Saraswati',
        address: 'Nr. Shivalik Satyamev, Vakil Saheb Bridge Ambli Bopal T Junction, Sardar Patel Ring Rd, Bopal, Ahmedabad, Gujarat 380058',
        imageUrl: require('../../assets/images/hospital/hospital4.jpg'),
        category:{'name':'Dentist'}
    }
];
  const param=useRoute().params;
  const [activeTab, setActiveTab] = useState('Hospital');
  return (
    <View style={{padding:30}}>
      <PageHeader title={param?.categoryName}/>
      <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>
      {!hospitalList?.length?<ActivityIndicator size={'large'} color={Colors.PRIMARY} /> : activeTab=='Hospital'?<HospitalListBig hospitalList={hospitalList}/>:<Text>Doctor List</Text>}
    </View>
  )
}