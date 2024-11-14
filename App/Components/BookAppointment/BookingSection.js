import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Shared/Color';
import SubHeading from '../Home/SubHeading';
import moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import Api from '../../Services/Api';
import { getLocalUser } from '../../Context/UserContext';

export default function BookingSection({ hospital }) {
  const [appointmentList, setAppointmentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [contactNumber, setContactNumber] = useState('');
  const [notes, setNotes] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    getLocalUser({ setLoading, setUserInfo });
    getDays();
    getTime();
    fetchAppointments(); // Fetch appointments initially
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await Api.getAppointment();
      setAppointmentList(response);
    } catch (error) {
      console.error('API error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 12; i < 18; i++) {
      timeList.push({
        time: `${i}:00-${i}:30`,
      });
      timeList.push({
        time: `${i}:30-${i + 1}:00`,
      });
    }
    setTimeList(timeList);
  };

  const getDays = () => {
    const tomorrow = moment().add(1, 'day');
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = moment(tomorrow).add(i, 'days');
      nextSevenDays.push({
        date: date.format('YYYY-MM-DD'),
        day: date.format('ddd'),
        formattedDate: date.format('Do MMM'),
      });
    }
    setNext7Days(nextSevenDays);
  };

  const renderDayButton = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedDate(item.date)}
      style={[styles.dayButton, selectedDate === item.date ? { backgroundColor: Colors.PRIMARY } : null]}
    >
      <Text style={[{ fontStyle: 'normal', fontSize: 10 }, selectedDate === item.date ? { color: Colors.white } : null]}>{item.day}</Text>
      <Text style={[{ fontSize: 10, fontWeight: 'bold' }, selectedDate === item.date ? { color: Colors.white } : null]}>{item.formattedDate}</Text>
    </TouchableOpacity>
  );

  const renderTimeButton = ({ item }) => {
    // Filter out times that are already booked
    const isBooked = appointmentList.some(appointment => {
      const appointmentDate = moment(appointment.date_time).format('YYYY-MM-DD');
      const appointmentTime = appointment.time_interval.replace(/\s/g, '');
      return appointmentDate === selectedDate && item.time === appointmentTime;
    });

    if (isBooked) {
      return null; // Do not render booked times
    }

    return (
      <TouchableOpacity
        onPress={() => setSelectedTime(item.time)}
        style={[styles.dayButton, selectedTime === item.time ? { backgroundColor: Colors.PRIMARY } : null]}
      >
        <Text style={[{ fontStyle: 'normal', fontSize: 10 }, selectedTime === item.time ? { color: Colors.white } : null]}>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  const rows = Math.ceil(timeList.length / 4);

  const bookAppointment = () => {
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Contact Number:', contactNumber);
    console.log('notes:', notes);

    if (!contactNumber) {
      alert('Please enter a contact number');
      return;
    }

    const data = {
      data: {
        Username: userInfo && userInfo.email ? userInfo.email.split('@')[0] : 'suraj.fero@gmail.com',
        Date: selectedDate,
        Time: selectedTime,
        Email: userInfo && userInfo.email ? userInfo.email : 'suraj.fero@gmail.com',
        Name : userInfo && userInfo.displayName ? userInfo.displayName : 'Suraj Singh',
        hospitals: hospital.id,
        Note: notes,
        contact_Number: contactNumber,
      },
    };

    console.log('Data to send:', data);

    const { Date, Email, Time, contact_Number, Note } = data.data;
    const [startTime, endTime] = Time.split('-');
    const dateParts = Date.split('-');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const date_time = `${formattedDate} ${startTime}:00`;
    const time_interval = `${startTime}-${endTime}`;
    const outputData = {
      email: Email,
      date_time: date_time,
      time_interval: time_interval,
      location: "Ahmedabad",
      name: 'Suraj Singh',
      contact_number: contact_Number,
      description: Note,
    };
    const jsonData = JSON.stringify(outputData);
    Api.createAppointment(jsonData)
      .then(resp => {
        navigation.navigate('CheckoutScreen');
      })
      .catch(error => {
        console.error('API Error:', error);
        Alert.alert('Error', 'Failed to book the appointment. Please try again.');
      });
  }

  return (
    <View>
      <Text style={{ fontSize: 12, color: Colors.GRAY }}>Book Appointment</Text>
      <SubHeading subHeadingTitle={'Day'} seeAll={false} />
      {[...Array(rows)].map((_, index) => (
          <View style={styles.daysContainer} key={index}>
            <FlatList
              data={next7Days.slice(index * 5, Math.min((index + 1) * 5, next7Days.length))}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderDayButton}
            />
          </View>
        ))}
      <View>
        <SubHeading subHeadingTitle={'Time'} seeAll={false} />
        {[...Array(rows)].map((_, index) => (
          <View style={styles.daysContainer} key={index}>
            <FlatList
              data={timeList.slice(index * 4, Math.min((index + 1) * 4, timeList.length))}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderTimeButton}
            />
          </View>
        ))}
      </View>
      <View>
        <SubHeading subHeadingTitle={'Contact Number'} seeAll={false} />
        <TextInput
          style={{
            backgroundColor: Colors.LIGHT_GRAY,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.SECONDARY,
            borderWidth: 1,
          }}
          placeholder='Enter Contact Number'
          keyboardType='phone-pad'
          onChangeText={value => setContactNumber(value)}
        />
      </View>
      <View>
        <SubHeading subHeadingTitle={'Note'} seeAll={false} />
        <TextInput
          numberOfLines={3}
          onChangeText={(value) => setNotes(value)}
          style={{
            backgroundColor: Colors.LIGHT_GRAY,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.SECONDARY,
            borderWidth: 1,
            textAlignVertical: 'top'
          }}
          placeholder='Write Notes Here'
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={bookAppointment}
          style={{
            marginTop: 10,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 13,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99
          }}
        >
          <Text style={{ color: Colors.white, textAlign: 'center', fontSize: 12 }}>Make Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayButton: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
    borderColor: Colors.PRIMARY,
  },
});
