import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Dimensions, Image } from 'react-native';

export default function Slider() {
    const sliderList = [
        {
            id: 1,
            name: 'Slider 1',
            imageUrl: require('../../../assets/images/clinic/hospital.jpg')
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: require('../../../assets/images/clinic/hospital1.jpg')
        },
        {
            id: 3,
            name: 'Slider 3',
            imageUrl: require('../../../assets/images/clinic/hospital2.jpg')
        },
        {
            id: 4,
            name: 'Slider 4',
            imageUrl: require('../../../assets/images/clinic/hospital3.jpg')
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // Move to the next image
    //         if (currentIndex < sliderList.length - 1) {
    //             flatListRef.current.scrollToIndex({ animated: true, index: currentIndex + 1 });
    //             setCurrentIndex(currentIndex + 1);
    //         } else {
    //             flatListRef.current.scrollToIndex({ animated: true, index: 0 });
    //             setCurrentIndex(0);
    //         }
    //     }, 5000); // Change image every 5 seconds

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, [currentIndex]); // Re-run effect when currentIndex changes

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                ref={flatListRef}
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.imageUrl}
                        style={{
                            width: Dimensions.get('screen').width * 0.9,
                            height: 170,
                            borderRadius: 10,
                            margin: 2
                        }}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                pagingEnabled
            />
        </View>
    );
}
