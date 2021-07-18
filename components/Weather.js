import React, { useState } from "react"
import { ImageBackground, Text, StyleSheet,View } from 'react-native'
import Forecast from "./Forecast"
import { useEffect } from "react"

export default function Weather(props) {
    
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fe9f8787bb3918c0300e911f2ff694d1`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main : '-',
        deecription : '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../cloud.jpg')} style={styles.backdrop}>
                <View style={styles.zipCode}>
                <Text style={styles.zipCode_code}>Zip Code {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
 );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zipCode: {
        top: 200,
        color: '#fff',
        fontSize: 100,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    zipCode_code: {
        top: -180,
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
})