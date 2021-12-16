import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Precio from "../screens/ServiciosAdmin/ServiciosAdmin.screen";

const Stack = createStackNavigator();

export default function ServiciosAdmin() {
  return (
    <Stack.Navigator
      initialRouteName="ServicioAdminScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ServicioAdminScreen" component={Precio} />
    </Stack.Navigator>
  );
}
