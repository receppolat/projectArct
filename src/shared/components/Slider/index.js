import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context';

function Slider({ data, renderItem, text, style }) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ marginBottom: '3%' }}>{text}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={style}
            />
        </SafeAreaView>
    )
}

export default Slider;