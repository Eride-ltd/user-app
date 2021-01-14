import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import OTPInputView from "@twotalltotems/react-native-otp-input";
import AppBackButton from '../../components/others/AppBackButton';
import AppButton from '../../components/others/AppButton';
import Screen from '../../components/Screen'
import colors from '../../utilities/colors';

export default function VerifyOTPScreen({navigation}) {
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
          <Text style={styles.heading}> Enter OTP Code here</Text>
          <OTPInputView
            pinCount={4}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            codeInputFieldStyle={styles.underlineStyleBase}
            style={{ width: "80%", height: 100, alignSelf: "center" }}
            onCodeFilled={(code) => {
             Alert.alert(`Code is ${code}, you are good to go!`);
            }}
          />

          <View style={{ alignItems: "center", marginTop: 40 }}>
            <AppButton
              name="NEXT"
              onPress={() => {
                navigation.navigate("Otp");
              }}
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
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    color: "black"
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

