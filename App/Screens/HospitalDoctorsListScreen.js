import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorScreen/HospitalListBig';
import Colors from '../../assets/Shared/Color';
import DoctorListBig from '../Components/HospitalDoctorScreen/DoctorListBig';


export default function HospitalDoctorsListScreen() {
  const hospitalList = [
    {
        id: 1,
        name: "Shalby Hospital",
        address : 'Sarkhej - Gandhinagar Hwy, opp. Karnavati Club, Ramdev Nagar, Ahmedabad, Gujarat 380015',
        imageUrl: require('../../assets/images/hospital/hospital.jpg'),
        about: 'Shalby Hospitals is an Indian organisation which was established in Ahmedabad as a joint replacement centre in 1994 by Dr. Vikram Shah. Shalby today runs a chain of 10 multi-specialty hospitals in Ahmedabad, Surat, Indore, Vapi, Jabalpur, Jaipur and Mohali.',
        category:{'name':'Dentist'}
    },
    {
        id: 2,
        name: 'Appolo Hospital',
        address: '12, Shanti Sadan Co-op Housing Soc limited, Akshara Complex, Parimal Underpass, near Parimal Garden, Ellisbridge, Ahmedabad, Gujarat 380006',
        imageUrl: require('../../assets/images/hospital/hospital1.jpg'),
        about: 'Apollo Hospitals Enterprise Limited is an Indian multinational healthcare group headquartered in Chennai. It is the largest for-profit private hospital network in India, with a network of 71 owned and managed hospitals',
        category:{'name':'Veda'}
    },
    {
        id: 3,
        name: 'KD Hospital',
        address: 'Vaishnodevi Circle, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 382421',
        imageUrl: require('../../assets/images/hospital/hospital2.jpg'),
        about: 'KD Hospital (Kusum Dhirajlal Hospital) is a multi/super speciality hospital located at the prime location of Vaishnodevi Circle, SG Road, Ahmedabad',
        category:{'name':'Dentist'}
    },
    {
        id: 4,
        name: 'Zydus Hospital',
        address: 'Zydus Hospital Rd, Sola, Ahmedabad, Gujarat 380059',
        imageUrl: require('../../assets/images/hospital/hospital3.jpg'),
        about: 'Zydus Hospitals, Ahmedabad Unit is a 550-bed Super multi-specialty regional hospital chain in Ahmedabad, Gujarat. Its accredited with all the NABH certifications available in the country including Radiology, ',
        category:{'name':'Dentist'}
    },
    { 
        id: 5,
        name: 'Saraswati Hospital',
        address: 'Nr. Shivalik Satyamev, Vakil Saheb Bridge Ambli Bopal T Junction, Sardar Patel Ring Rd, Bopal, Ahmedabad, Gujarat 380058',
        imageUrl: require('../../assets/images/hospital/hospital4.jpg'),
        about: 'A 40-years old legacy in extending excellent healthcare services to the community, Saraswati Hospital is a leading Multispecialty Hospital based in Ahmedabad',
        category:{'name':'Dentist'}
    }
];

const doctorList = [
  {
      id: 1,
      name: 'Dr. Megha Rajput',
      description: 'Obstetrician/Gynecologist ',
      imageUrl: require('../../assets/images/doctor/doctor4.jpg'),
      category:{'name':'Dentist'}
  }
];
  const param=useRoute().params;
  const [activeTab, setActiveTab] = useState('Hospital');
  return (
    <View style={{padding:30}}>
      <PageHeader title={param?.categoryName}/>
      <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>
      {!hospitalList?.length?<ActivityIndicator size={'large'} color={Colors.PRIMARY} /> : activeTab=='Hospital'?<HospitalListBig hospitalList={hospitalList}/>:<DoctorListBig doctorList={doctorList}/>}
    </View>
  )
}