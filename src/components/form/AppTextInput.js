import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../utilities/colors'

export default function AppTextInput({label, placeholder, name}) {
    return (
        <View style={styles.container}>
            <Text style= {styles.label}> { label}</Text>
            <TextInput style={styles.inputBox} autoCorrect ={false} autoCapitalize="none" placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    inputBox: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '100%',
        height: 42,
        fontSize: 14,
        padding: 5,
    },
    label: {
        fontSize: 15
    }
})
