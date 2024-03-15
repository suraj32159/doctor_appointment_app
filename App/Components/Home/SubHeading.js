import { View, Text } from 'react-native';
import React from 'react';
import Colors from '../../../assets/Shared/Color';

export default function SubHeading({ subHeadingTitle, seeAll = true }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{subHeadingTitle}</Text>
      {seeAll && <Text style={{ fontStyle: 'normal', color: Colors.PRIMARY }}>See All</Text>}
    </View>
  );
}
