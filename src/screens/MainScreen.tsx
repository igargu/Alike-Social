import React from "react";
import {View, Button, Text, ToastAndroid, Alert, StyleSheet } from "react-native";

export const MainScreen = ({ navigation } : { navigation: any }) => {

  const logout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Deseas cerrar la sesión?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Aceptar",
            onPress: () =>  {
              navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            }),
            ToastAndroid.show('Sesión cerrada', ToastAndroid.SHORT)
          }
        }
      ]
    )
  }

  return (
    <View style={
      {
        padding: 20,
        marginTop: 50,
        alignItems: 'center',
      }
    }>
      
    </View>
  )
}

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 400,
  },
});

