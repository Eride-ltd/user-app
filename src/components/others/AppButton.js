import React from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export default function AppButton({name}) {
    return (
        <TouchableOpacity style={styles.buttonContainer}> 
            <Text> {name}</Text>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {

    },
    buttonContainer: {
        
    },
})
