import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import PageHeader from '../Components/Shared/PageHeader';
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem';
import Api from '../Services/Api';
import { getLocalUser } from '../Context/UserContext';

export default function Appointment() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getLocalUser({ setLoading, setUserInfo }); // Pass setLoading and setUserInfo here
        setUserInfo(user);
      } catch (error) {
        console.error('User fetch error:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAppointments = async (email) => {
      try {
        const response = await Api.getAppointment({ email });
        setAppointmentList(response);
      } catch (error) {
        console.error('API error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userInfo && userInfo.email) {
      setLoading(true);
      fetchAppointments(userInfo.email);
    }
  }, [userInfo]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <PageHeader title={'My Appointment'} backbutton={false} />
      <FlatList
        data={appointmentList}
        renderItem={({ item }) => (
          <AppointmentCardItem appointment={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
