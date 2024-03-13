import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../assets/Shared/Color';


export default function HospitalDoctorTab({activeTab}) {
    const [activeIndex,setActiveIndex]=useState(0)
  return (
    <View style={{marginTop:10}}>
        <View style={{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-around'}}>
            <TouchableOpacity style={[activeIndex==0?styles.activeTab:styles.inActiveTab]} onPress={()=>{setActiveIndex(0); activeTab('Hospital')}}>
                <Text style={[
                    activeIndex==0?
                    styles.activeText:styles.inActiveText
                ]}>Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[activeIndex==1?styles.activeTab:styles.inActiveTab]} onPress={()=>{setActiveIndex(1); activeTab('Doctor')}}>
                <Text style={[
                    activeIndex==1?
                    styles.activeText:styles.inActiveText
                ]}>Doctor</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    activeText:{
        textAlign:'center',
        fontSize:15,
        color:Colors.PRIMARY,
        fontStyle:'normal',
        fontWeight:'bold'
    },
    inActiveText:{
        textAlign:'center',
        fontSize:15,
        color:Colors.GRAY,
        fontStyle:'normal',
        fontWeight:'bold'
    },
    activeTab:{
        borderBottomColor:Colors.PRIMARY,
        padding:3,
    },
    inActiveTab:{
        borderBottomColor:Colors.GRAY,
        padding:3,
    }
})