import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentCardItem = ({ appointment }) => {
  const {
    date_time,
    contact_number,
    gmeet_link,
    time_interval,
    location,
    description,
    user_details,
  } = appointment;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Appointment: {new Date(date_time).toLocaleDateString()} {time_interval}</Text>
      <Text>Date: {new Date(date_time).toLocaleDateString()}</Text>
      <Text>Time: {time_interval}</Text>
      <Text>Location: {location}</Text>
      <Text>Description: {description}</Text>
      {contact_number && <Text>Contact: {contact_number}</Text>}
      {gmeet_link && <Text>Gmeet: {gmeet_link}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AppointmentCardItem;
