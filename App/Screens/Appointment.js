import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PageHeader from '../Components/Shared/PageHeader'
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem';

export default function Appointment() {
  const appointmentList = [
    {
        id: 1,
        name: "Shalby Hospital",
        address : 'Sarkhej - Gandhinagar Hwy, opp. Karnavati Club, Ramdev Nagar, Ahmedabad, Gujarat 380015',
        imageUrl: require('../../assets/images/hospital/hospital.jpg'),
        about: 'Shalby Hospitals is an Indian organisation which was established in Ahmedabad as a joint replacement centre in 1994 by Dr. Vikram Shah. Shalby today runs a chain of 10 multi-specialty hospitals in Ahmedabad, Surat, Indore, Vapi, Jabalpur, Jaipur and Mohali.',
        category:{'name':'Dentist'},
        date: "15-March-2024",
        time: "8:00-8:30"
    },
    {
        id: 2,
        name: 'Appolo Hospital',
        address: '12, Shanti Sadan Co-op Housing Soc limited, Akshara Complex, Parimal Underpass, near Parimal Garden, Ellisbridge, Ahmedabad, Gujarat 380006',
        imageUrl: require('../../assets/images/hospital/hospital1.jpg'),
        about: 'Apollo Hospitals Enterprise Limited is an Indian multinational healthcare group headquartered in Chennai. It is the largest for-profit private hospital network in India, with a network of 71 owned and managed hospitals',
        category:{'name':'Veda'},
        date: "15-March-2024",
        time: "8:00-8:30"
    },
    {
        id: 3,
        name: 'KD Hospital',
        address: 'Vaishnodevi Circle, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 382421',
        imageUrl: require('../../assets/images/hospital/hospital2.jpg'),
        about: 'KD Hospital (Kusum Dhirajlal Hospital) is a multi/super speciality hospital located at the prime location of Vaishnodevi Circle, SG Road, Ahmedabad',
        category:{'name':'Dentist'},
        date: "15-March-2024",
        time: "8:00-8:30"
    },
    {
        id: 4,
        name: 'Zydus Hospital',
        address: 'Zydus Hospital Rd, Sola, Ahmedabad, Gujarat 380059',
        imageUrl: require('../../assets/images/hospital/hospital3.jpg'),
        about: 'Zydus Hospitals, Ahmedabad Unit is a 550-bed Super multi-specialty regional hospital chain in Ahmedabad, Gujarat. Its accredited with all the NABH certifications available in the country including Radiology, ',
        category:{'name':'Dentist'},
        date: "15-March-2024",
        time: "8:00-8:30"
    },
    { 
        id: 5,
        name: 'Saraswati Hospital',
        address: 'Nr. Shivalik Satyamev, Vakil Saheb Bridge Ambli Bopal T Junction, Sardar Patel Ring Rd, Bopal, Ahmedabad, Gujarat 380058',
        imageUrl: require('../../assets/images/hospital/hospital4.jpg'),
        about: 'A 40-years old legacy in extending excellent healthcare services to the community, Saraswati Hospital is a leading Multispecialty Hospital based in Ahmedabad',
        category:{'name':'Dentist'},
        date: "15-March-2024",
        time: "8:00-8:30"
    }
];
  return (
    <View style={{padding:20, marginTop:20}}>
      <PageHeader title={'My Appointment'} backbutton={false}/>
      <FlatList
        data = {appointmentList}
        renderItem={({item}) => (
          <AppointmentCardItem appointment={item}/>
        )}
      />
    </View>
  )
}