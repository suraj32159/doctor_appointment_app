import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Color';

export default function AppointmentCardItem({ appointment }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.dateTimeText}>{appointment.date} - {appointment.time}</Text>
        <Text style={styles.hospitalNameText}>{appointment.name}</Text>
      </View>
      <Image style={styles.image} source={appointment.imageUrl} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hospitalNameText: {
    fontSize: 14,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});
