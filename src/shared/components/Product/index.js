import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../../Pages/Register/style'

export default function Product({ data }) {
    return (
        <ImageBackground
            source={{ uri: data.images[0] }}
            style={styles.image}
        >
            <View style={styles.imageBar}>
                <Text>{data.title}</Text>
            </View>
        </ImageBackground>
    )
}