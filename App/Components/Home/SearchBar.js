import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Color';

export default function SearchBar({setSearchText}) {
    const [searchInput, setSearchInput] = useState();
  return (
    <View style={{ marginTop: 15 }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: Colors.GRAY,
        padding: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8
      }}>
        <Ionicons name="search-outline" size={20} color={Colors.PRIMARY} style={{ marginRight: 5 }} />
        <TextInput placeholder='Search'
        onChangeText={(value) => setSearchInput(value)} 
        onSubmitEditing={(value)=>setSearchText(searchInput)} style={{ width:"100%", flex: 1 }} />
      </View>
    </View>
  );
}
