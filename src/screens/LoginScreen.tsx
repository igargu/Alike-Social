
import React, { useState } from "react";
import { ScrollView, View, Image, Button, Text, TextInput, ToastAndroid, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

import AuthService from "../services/auth";

export const LoginScreen = ({ navigation }: {navigation: any}) => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackText, setSnackText] = useState('')

  const onDismissSnackBar = () => setVisible(false);

  const login = () => { 
    
    /*AuthService.login({username: user, password: pass}).then((response: any) => {
      if(response.token){ 
        console.log(response.token)*/
        navigation.navigate('MainStackNavigator', {username: user, password: pass, token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJpa2VyIiwiZXhwIjoxNjU0MzM0NjExfQ.XlGCrU8UbMjaVzCjW3ZP4WLhiHXgGIaLh0JkxMmHbGo'})
      /*} else{
        console.log(response.message)
        setSnackText(response.message)
        setVisible(true)
      }
    })*/
  }

  return(
    <View style={
      {
        padding: 20,
        marginTop: 50,
      }
    }>
      <ScrollView>
        <View style={
          {
            alignItems: 'center',
            marginBottom: 20,
          }
        }>
          <Image
            source={
              {
                uri: 'https://images-platform.99static.com/1z5KOHE1A9I3VhFwVE26LaWcyJs=/500x500/top/smart/99designs-contests-attachments/7/7242/attachment_7242333'
              }
            }
            style={
              {
                width: 300,
                height: 300,
              }
            } 
          />
        </View>
        <Text style={
          {
            fontSize: 25,
          }
        }>
          Usuario: 
        </Text>
        <TextInput
          style={
            styles.input
          }
          placeholder="Introduzca su usuario"
          onChangeText={(value) => setUser(value)}
        />
        <Text style={
          {
            fontSize: 25,
          }
        }>
          Contraseña: 
        </Text>
        <TextInput
          secureTextEntry={true}
          style={
            styles.input
          }
          placeholder="Introduzca su contraseña"
          onChangeText={(value) => setPass(value)}
        />
        <View style={
              styles.button
            }>
          <Button
            title="Iniciar sesión"
            color="#ff4500"
            onPress={login}
          />
          <View style={
            {
              alignItems: "center",
              marginTop: 15,
            }
          }>
            <Text 
              onPress={()=> navigation.navigate('RegisterScreen')}
            >
              ¿No tienes cuenta? Registrate aquí
            </Text>
          </View>
        </View>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={4000}
        action={{
          label: 'Dismiss',
          onPress: () => {
            onDismissSnackBar()
          },
        }}
      >
        {snackText}    
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    margin: 20,
  },
});

