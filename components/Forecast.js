import React from 'react'
import { Text } from 'react-native'

export default function Forecast(props){
    return(
        <view>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
        </view>
    )
}