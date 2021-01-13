import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import AppButton from '../../components/others/AppButton'
import AppLightButton from '../../components/others/AppLightButton';
import Screen from '../../components/Screen'

export default function WelcomeScreen() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../../assets/images/Splash2.png")}
      >
        <View style={styles.overlay}>
                <View style={styles.mainArea}>
                    <Image source={require('../../../assets/eride-01.png')} style={styles.logo}/>
            <Text style={{ color: "white", marginBottom: 50, textAlign: 'center'}}>
              {" "}
              An Excellent ride is guaranteed
            </Text>
            <View style={{ height: 20 }} />
            <View style={{ height: 20 }} />
            <View style={{ height: 20 }} />
            <View style={{ height: 20 }} />
            <View style={{ height: 20 }} />
            <AppButton name="SIGNUP"> </AppButton>
            <View style={{ height: 20 }} />
            <AppLightButton name="LOGIN" />
          </View>
        </View>
      </ImageBackground>
    );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
        flex: 1,
    
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.65,
    justifyContent: "center",
    alignItems: "center",
    },
    logo: {
        width: 260,
        height: 140
  },
  mainArea: {},
});
