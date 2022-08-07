import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function Button({ style, text, onPress, textStyle }) {
    return (
        <TouchableOpacity
            style={style}
            onPress={onPress}
        >
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}
export default Button;