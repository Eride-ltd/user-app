import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import RegisterScreen from "../screens/auth/RegisterScreen";
import LoginScreen from '../screens/auth/LoginScreen';
import EnterPhoneNumberScreen from '../screens/auth/EnterPhoneNumberScreen';
const Stack = createStackNavigator();
export default function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Phone"
            component={EnterPhoneNumberScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
