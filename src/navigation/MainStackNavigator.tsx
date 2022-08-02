import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from "react-native-paper";
// import Icon from "@mdi/react";
// SCREENS
import { MainScreen } from "../screens/MainScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export const MainStackNavigator = ({ route }: { route: any }) => {
  
  const {username, password, token} = route.params

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          // Los iconos se colocan en base a la ruta en la que estemos
          switch (route.name) {
            case "Main":
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              break
            case "Settings":
              iconName = focused ? 'settings' : 'settings-outline';
              break
            default: 
              iconName = 'help-outline';
              break
          }

          // Iconos de las pantallas
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff4500',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Main" component={MainScreen} initialParams={{username: username, password: password, token: token}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} initialParams={{username: username, password: password, token: token}}/>
    </Tab.Navigator>
    
  );
}