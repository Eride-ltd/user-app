import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppTextInput from "../../components/form/AppTextInput";
import AppBackButton from "../../components/others/AppBackButton";
import AppLightButton from "../../components/others/AppLightButton";
import Screen from "../../components/Screen";

export default function EnterPhoneNumberScreen({ navigation }) {
  return (
    <Screen>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AppBackButton />
      </TouchableOpacity>

      <View style={styles.main}>
        <Text style={styles.heading}> Enter Mobile Number</Text>
        <AppTextInput placeholder="eg: Adekunle" label="Phone Number" />

        <View style={{ alignItems: "center", marginTop: 40 }}>
          <AppLightButton
            name="NEXT"
                      onPress={() => { navigation.navigate("Otp") }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    marginHorizontal: 30,
    alignContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 50,
  },
});
