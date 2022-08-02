import React from "react";
import { View, Text } from "react-native";

export const SettingsScreen = () => {

  return (
    <View style={
      {
        padding: 20,
        marginTop: 50,
        alignItems: 'center',
      }
    }>
      <Text style={
        {
          fontSize: 25,
        }
      }>
        Esta es la pantalla de ajustes
      </Text>
    </View>
  )
}

