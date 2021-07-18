import React from 'react';
import { FlatList, View, Text, StyleSheet} from "react-native"

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code}) => (
    <View style={StyleSheet.ZipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    )


export default function zipCodeScreen(){
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
    },
    zipPlace: {
         flex: 1,
    },
    zipCode: {
        flex: 1,
    }
}) 