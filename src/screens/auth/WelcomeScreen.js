import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Screen from '../../components/Screen'

export default function WelcomeScreen() {
    return (
        <ImageBackground style={ styles.container} source = {require('../../../assets/images/examplebg.jpeg')}> 
            <View style={styles.overlay}> 
                <View style={styles.mainArea}> 
                    
            </View>
            </View>
     </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.65,
    },
    mainArea: {
      
  }
});
