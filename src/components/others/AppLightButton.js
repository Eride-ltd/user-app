import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../utilities/colors";

export default function AppLightButton({ name, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress = {onPress}>
      <Text style={styles.text}> {name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  buttonContainer: {
    // paddingVertical: 20,
    backgroundColor: 'transparent',
    width: 260,
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 20,
      marginVertical: 10,
      borderWidth: 1,
    borderColor: colors.primary
  },
});
