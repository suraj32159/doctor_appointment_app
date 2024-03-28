import React from "react";
import { View, Text, Image } from 'react-native'
import patient from '../../../assets/images/app/patient.jpg';
import { Ionicons } from '@expo/vector-icons';
import { getLocalUser } from '../../Context/UserContext';


export default function Header() {
  const [loading, setLoading] = React.useState(false);
  const [userInfo, setUserInfo]= React.useState({ displayName: "" });
  React.useEffect(() => {
    getLocalUser({ setLoading, setUserInfo });
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <View style={{display: 'flex', flexDirection:'row', gap:7, alignItems:'center', justifyContent:'space-between'}}>
        <View style={{display: 'flex', flexDirection:'row', gap:7, alignItems:'center'}}>
            <View style={{padding:5, marginTop:0}}>
                <Image source={patient} style={{width: 35, height: 35, borderRadius: 99}} />
            </View>
            <View>
                <Text style={{fontSize:10}}>Hello,</Text>
                <Text style={{fontSize:11, fontWeight: 'bold'}}>
                  {capitalizeFirstLetter(userInfo.displayName)}
                </Text>
            </View>
        </View>
        <Ionicons name="notifications" size={24} color="black" />
    </View>
  )
}
