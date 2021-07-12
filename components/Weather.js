import React , {useState}from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} resizeMode="cover" style={styles.backdrop}>
                <Text style={styles.zipCode}>Zip Code</Text>
                <Text style={styles.zipCode_code}>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    zipCode: {
        top: -140,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    zipCode_code: {
        top: -230,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
});