import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default function AppButton({name, onPress}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress = {onPress}> 
            <Text style ={styles.text}> {name}</Text>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    width: 260,
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 20,
    marginVertical: 10,
  },
});
