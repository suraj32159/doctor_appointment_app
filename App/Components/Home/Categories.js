import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Color';
import SubHeading from './SubHeading';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const navigation=useNavigation();
    const categoryList = [
        {
            id: 1,
            name: 'Vasta',
            imageUrl: require('../../../assets/images/categories/category.jpg')
        },
        {
            id: 2,
            name: 'Pissa',
            imageUrl: require('../../../assets/images/categories/category1.jpg')
        },
        {
            id: 3,
            name: 'Kappa',
            imageUrl: require('../../../assets/images/categories/category2.jpg')
        },
        {
            id: 4,
            name: 'Ayur',
            imageUrl: require('../../../assets/images/categories/category4.jpg')
        },
        {
            id: 5,
            name: 'Dream',
            imageUrl: require('../../../assets/images/categories/category5.jpg')
        }
    ];

    return (
        <View>
            <SubHeading subHeadingTitle={'Doctor Speciality'}/>
            <FlatList
                data={categoryList}
                numColumns={5}
                columnWrapperStyle={{flex:1, justifyContent: 'space-between'}}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('hospital-doctor-list-screen', { categoryName:item.name})}>
                        <View style={styles.categoryItem}>
                            <View style={{ backgroundColor: Colors.SECONDARY, borderRadius: 99, padding:12, justifyContent: 'space-between'}}>
                                <Image
                                    source={item.imageUrl}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                            <Text style={{ fontStyle: 'normal'}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    categoryItem: {
        marginRight: 10,
        marginTop: 5,
        alignItems: 'center' // Add margin between items if needed
    }
});