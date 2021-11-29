import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import MisTurnosScreen from "../screens/registrar/Registrar.screen";

const Stack = createStackNavigator();

export default function MisTurnosStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="RegistrarScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RegistrarScreen" component={MisTurnosScreen} />
    </Stack.Navigator>
  );
}
