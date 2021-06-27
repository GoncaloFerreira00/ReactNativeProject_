import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Imports necessários para a navegação
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import Login from "./Views/Login"
import Register from "./Views/Register"
import Home from "./Views/Home"
import PassRecover from "./Views/PassRecover"


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="PassRecover" component={PassRecover}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar barStyle="light-content"></StatusBar>
    </NavigationContainer>
  );
}


