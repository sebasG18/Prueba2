import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "../Screens/Inicio";
import Login from "../Screens/Login";
import Welcome from "../Screens/Welcome";
import Perfil from "../Screens/Perfil";
import Registro from "../Screens/Registro";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MyTabs = () => {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Home" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};



export default function TabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}