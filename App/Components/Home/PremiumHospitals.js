import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SubHeading from './SubHeading';
import Hospitalitem from './Hospitalitem';
import { useNavigation } from '@react-navigation/native';

export default function PremiumHospitals() {
  const navigation=useNavigation();
  const hospitalList = [
    {
      id: 1,
      name: "Shalby",
      address: 'Sarkhej - Gandhinagar Hwy, opp. Karnavati Club, Ramdev Nagar, Ahmedabad, Gujarat 380015',
      imageUrl: require('../../../assets/images/hospital/hospital.jpg')
    },
    {
      id: 2,
      name: 'Appolo',
      address: '12, Shanti Sadan Co-op Housing Soc limited, Akshara Complex, Parimal Underpass, near Parimal Garden, Ellisbridge, Ahmedabad, Gujarat 380006',
      imageUrl: require('../../../assets/images/hospital/hospital1.jpg')
    },
    {
      id: 3,
      name: 'KD',
      address: 'Vaishnodevi Circle, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 382421',
      imageUrl: require('../../../assets/images/hospital/hospital2.jpg')
    },
    {
      id: 4,
      name: 'Zydus',
      address: 'Zydus Hospital Rd, Sola, Ahmedabad, Gujarat 380059',
      imageUrl: require('../../../assets/images/hospital/hospital3.jpg')
    },
    {
      id: 5,
      name: 'Saraswati',
      address: 'Nr. Shivalik Satyamev, Vakil Saheb Bridge Ambli Bopal T Junction, Sardar Patel Ring Rd, Bopal, Ahmedabad, Gujarat 380058',
      imageUrl: require('../../../assets/images/hospital/hospital4.jpg')
    }
  ];

  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading subHeadingTitle={'Our Premium Hospital'} />
      <FlatList
        style={{ marginTop: 10 }}
        data={hospitalList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <Hospitalitem hospital={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Book Appointment Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          marginVertical: 20,
        }}
        onPress={() => navigation.navigate('hospital-doctor-list-screen')}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Go to Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}
