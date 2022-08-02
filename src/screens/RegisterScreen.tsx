import React, { useState } from "react";
import { ScrollView, View, Image, Button, Text, TextInput, ToastAndroid, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import AuthService from "../services/auth";

export const RegisterScreen = ({ navigation } : {navigation: any}) => {
  
  // STATE
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setPassAgain] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackText, setSnackText] = useState('')
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/
  

  // FUNCTIONS
  const onDismissSnackBar = () => setVisible(false);

  const login = (credentials: Object) => {  
    AuthService.login(credentials).then((response: any) => {
      if(response.token){ 
        console.log(response.token)
        navigation.navigate('MainStackNavigator', {username: user, password: pass, token: response.token})
      } else{
        console.log(response.message)
        setSnackText(response.message)
        setVisible(true)
      }
    })
  }

  const register = () => {
    if (checkFields()) {
      let bio = "Hi! I am new in Alike!"
      const credentials = {
        username: user,
        password: pass,
        bio: bio,
        email: email
      }
      AuthService.register(credentials).then((response: any) => {
        console.log(response.message)
        if(response.message === 'error de validación'){
          setVisible(true)
          setSnackText('Validation Error')
          return
        }

        if(response.message.includes('username')){
          setVisible(true)
          setSnackText('Este nombre de usuario ya existe')
          return
        }
        console.log('que dise el tipo')
        if(response.message.includes('email')){
          setVisible(true)
          setSnackText('Este e-mail ya ha sido registrado. Inicie Sesión')
          return
        }

        if(response.message === 'user added'){
          const credentials = {username: user, password: pass}
          login(credentials)
          setVisible(true)
          setSnackText('Bienvenido ' + user + '!')
        }
      })
    }
  }

  const validateField = (field: String, regex: any) => field.match(regex) ? true : false

  const enableButton = () => {
    return user.replace(' ', '').length !== 0 &&
           pass.replace(' ', '').length !== 0 &&
           repeatPass.replace(' ', '').length !== 0 &&
           email.replace(' ', '').length !== 0
  }

  const checkFields = () => {
    if(!validateField(email, regexEmail)){
      setVisible(true)
      setSnackText('La dirección de E-Mail no es válida')
      return false
    }

    if(!validateField(pass, regexPass)){
      setVisible(true)
      setSnackText('La contraseña debe incluir mayúsculas, minúsculas, números, caracteres especiales, min 8 caracteres y max 15')
      return false
    }
    
    if(pass !== repeatPass){
      setVisible(true)
      setSnackText('Las contraseñas no coinciden')
      return false
    }

    return true
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
          E-Mail: 
        </Text>
        <TextInput
          style={
            styles.input
          }
          placeholder="Introduzca su e-mail"
          keyboardType='email-address'
          onChangeText={(value) => setEmail(value)}
        />
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
          // secureTextEntry={true}
          style={
            styles.input
          }
          placeholder="Introduzca su contraseña"
          onChangeText={(value) => setPass(value)}
        />
        <Text style={
          {
            fontSize: 25,
          }
        }>
          Repetir contraseña: 
        </Text>
        <TextInput
          // secureTextEntry={true}
          style={
            styles.input
          }
          placeholder="Introduzca su contraseña de nuevo"
          onChangeText={(value) => setPassAgain(value)}
        />
        <View style={
              styles.button
            }>
          <Button
            title="Registrarse"
            color="#ff4500"
            disabled={ !enableButton() }
            onPress={register}
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
              ¿Ya tienes cuenta? Inicia sesión aquí
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* SNACKBAR */}
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

