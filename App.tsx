import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./Components/Login";
import HomeScreen from "./Components/Home";
import WelcomeScreen from "./Components/Welcome"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerBackVisible: true,
        animation: "slide_from_right"
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Home" component={ProfileScreen} /> */}
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
} 