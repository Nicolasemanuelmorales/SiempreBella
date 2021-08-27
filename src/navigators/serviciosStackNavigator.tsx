import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Servicios from "../screens/servicios/Servicios.screen";

const Stack = createStackNavigator();

export default function MisTurnosStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ServiciosScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ServiciosScreen" component={Servicios} />
    </Stack.Navigator>
  );
}
