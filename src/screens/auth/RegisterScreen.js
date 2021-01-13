import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppTextInput from "../../components/form/AppTextInput";
import AppBackButton from "../../components/others/AppBackButton";
import AppButton from "../../components/others/AppButton";
import Screen from "../../components/Screen";

export default function RegisterScreen({ navigation }) {
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
        <Text style={styles.heading}> Create Account</Text>
        <AppTextInput placeholder="eg: Adekunle" label="First Name" />
        <AppTextInput placeholder="eg: Gold" label="Last Name" />
        <AppTextInput
          placeholder="eg: adekunlegold2020@gmail.com"
          label="Email"
        />
        <AppTextInput placeholder="**********" label="Password" />
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <AppButton name="NEXT" onPress={() => navigation.navigate("Phone")} />
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
