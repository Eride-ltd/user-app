import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function AppBackButton() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="arrow-left" size={ 30} color ="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
