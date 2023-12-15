import {StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Welcome({navigation}:any) {
  function logOut(){
    navigation.navigate('Login')
  }
  return (
    <View>
      <View>
      <Text>Bienvenido a nuestra pagina de bienvenida</Text>
      </View>
      <Button onPress={logOut} title='LogOut'></Button>

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    color: '#fff',
    height: 40,
    borderRadius: 5,
    fontWeight: 'bold',
  },
})