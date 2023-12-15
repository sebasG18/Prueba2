import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

//FIREBASE
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Components/firebaseConfig';

export default function RegistroScreen( {navigation}: any ) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function registro(){
    navigation.navigate('Login')
  }


  return (
    <View>
      <Text>REGISTRO</Text>
      <TextInput
        placeholder='Ingrese correo'
        onChangeText={(text) => (setCorreo(text))}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Ingrese contraseña'
        onChangeText={(text) => (setContrasenia(text))}
      />

      <Button title='Registro' onPress={()=> registro()} />
    </View>
  )
}

const styles = StyleSheet.create({})