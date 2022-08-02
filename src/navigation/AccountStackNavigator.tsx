import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LoginScreen} from "../screens/LoginScreen";
import {RegisterScreen} from "../screens/RegisterScreen";
import { MainStackNavigator } from "./MainStackNavigator";

const Stack = createNativeStackNavigator();

const loading = false

export const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={
          { 
            title: 'Alike - Login' 
          }
        }
      />
      <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen}
        options={
          { 
            title: 'Alike - Register',
            headerBackVisible: false
          }
        }
      />
      <Stack.Screen
        name="MainStackNavigator"
        component={ MainStackNavigator }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}