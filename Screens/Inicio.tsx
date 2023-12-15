import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


export default function Inicio({navigation}:any) {
  const goToLogin = () => {
    navigation.navigate('Registro'); 
  };
  return (
    
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir a Registro"
        onPress={goToLogin}
      />
    </View>
  )
}

const styles = StyleSheet.create({})