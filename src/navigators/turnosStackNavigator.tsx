import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Turnos from "../screens/turnos/Turnos.screen";

const Stack = createStackNavigator();

export default function turnosStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TurnosScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TurnosScreen" component={Turnos} />
    </Stack.Navigator>
  );
}
