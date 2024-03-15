import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppointmentHospitalInfo from '../Components/BookAppointment/AppointmentHospitalInfo'
import { useRoute } from '@react-navigation/native'
import ActionButton from '../Components/HospitalDetail/ActionButton';
import HorizontalLine from '../Components/Shared/HorizontalLine';
import BookingSection from '../Components/BookAppointment/BookingSection';

export default function BookAppointment() {
  const [hospital, setHospital] = useState(null);
  const param = useRoute().params;

  useEffect(() => {
      if (param && param.hospital) {
          setHospital(param.hospital);
      }
  }, [param]);
  return (
    <View style={{padding:20}}>
      <AppointmentHospitalInfo hospital={param}/>
      <BookingSection/>
    </View>
  )
}