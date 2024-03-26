import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../../assets/Shared/Color';
import SubHeading from '../Home/SubHeading';
import moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import Api from '../../Services/Api';


export default function BookingSection({hospital}) {
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [contactNumber, setContactNumber] = useState('');
  const [notes, setNotes] = useState();

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 12; i < 18; i++) {
      timeList.push({
        time: `${i}:00 : ${i}:30`,
      });
      timeList.push({
        time: `${i}:30 : ${i + 1}:00`,
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
      <Text style={[{ fontStyle: 'normal', fontSize:10 }, selectedDate === item.date ? { color: Colors.white } : null]}>{item.day}</Text>
      <Text style={[{ fontSize: 10, fontWeight: 'bold' }, selectedDate === item.date ? { color: Colors.white } : null]}>{item.formattedDate}</Text>
    </TouchableOpacity>
  );

  const renderTimeButton = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedTime(item.time)}
      style={[styles.dayButton, selectedTime === item.time ? { backgroundColor: Colors.PRIMARY } : null]}
    >
      <Text style={[{ fontStyle: 'normal', fontSize:10 }, selectedTime === item.time ? { color: Colors.white } : null]}>{item.time}</Text>
    </TouchableOpacity>
  );
  
  const rows = Math.ceil(timeList.length / 4);

  const bookAppointment=()=>{
    const data={
      data:{
        Username:'raj1',
        Date:selectedDate,
        Time:selectedTime,
        Email:userData.email,
        hospitals:hospital.id,
        Note:notes
      }
    }

    const { Date, Email, Time } = data.data;
    const [startTime, endTime] = Time.split(' : ');
    const dateParts = Date.split('-');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const date_time = `${formattedDate} ${startTime}:00`;
    const time_interval = `${startTime}-${endTime}`;
    const outputData = {
        email: Email,
        date_time: date_time,
        time_interval: time_interval,
        location: "Ahmedabad"
    };
    
    const jsonData = JSON.stringify(outputData);
    console.log("outputData", jsonData); 

    Api.createAppointment(jsonData).then(resp=>{
      console.log(resp)
    })
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
            backgroundColor:Colors.LIGHT_GRAY,
            padding:10,
            borderRadius:10,
            borderColor:Colors.SECONDARY,
            borderWidth:1,
          }}
          placeholder='Enter Contact Number'
          keyboardType='phone-pad'
          onChangeText={text => setContactNumber(text)}
          value={contactNumber}
        />
      </View>
      <View>
        <SubHeading subHeadingTitle={'Note'} seeAll={false} />
        <TextInput
          numberOfLines={3}
          onChangeText={(value)=>setNotes(value)}
          style={{
            backgroundColor:Colors.LIGHT_GRAY,
            padding:10,
            borderRadius:10,
            borderColor:Colors.SECONDARY,
            borderWidth:1,
            textAlignVertical:'top'
          }}
          placeholder='Write Notes Here'
        />
      </View>
      <View>
        <TouchableOpacity
            onPress={() => bookAppointment()}
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
    flexDirection: 'row', // Changed to row to display items in a row
    flexWrap: 'wrap', // Allow items to wrap to the next row if they exceed the container's width
  },
  dayButton: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5, // Added margin bottom for separation
    borderColor: Colors.PRIMARY,
  },
});
