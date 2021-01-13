import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../screens/auth/WelcomeScreen';
const Stack = createStackNavigator();
export default function Navigation() {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName ="Welcome">
                <Stack.Screen options={{
              headerShown: false
          }} name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
