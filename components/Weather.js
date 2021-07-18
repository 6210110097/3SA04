import React from 'react'
import { FlatList , View , Text, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   

   const ZipItem = ({place, code, navigation}) => (
        <TouchableHighlight  onPress= {() => {
            navigation.navigate('Weather',{zipCode: code})
        }}>
            <View style = {styles.zipItem} > 
                 <Text style = {styles.zipPlace} >{place}</Text>
                 <Text style = {styles.zipCode}>{code}</Text>
            </View>
        </TouchableHighlight>
)
   

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../cloud.jpg')} style={styles.backdrop}>
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem =  {({item}) => <ZipItem {...item}  navigation = {navigation}/> }
        />
        </ImageBackground> 
    )
}


const styles = StyleSheet.create({
    zipItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop:20,
        marginLeft: 30,
        marginRight:30,
        padding: 10  
    },
    zipPlace:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0E0301'
    },
    zipCode: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color:'#0E0301'
    },
    backdrop: {
        width: '100%',
        height: '100%',
    }

})