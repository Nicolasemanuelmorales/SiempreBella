import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Disponibilidad from "../screens/disponibilidad/Disponibilidad.screen";

const Stack = createStackNavigator();

export default function DisponibilidadStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="DisponibilidadScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DisponibilidadScreen" component={Disponibilidad} />
    </Stack.Navigator>
  );
}
