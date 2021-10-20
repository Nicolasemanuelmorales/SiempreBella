import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import MisTurnosScreen from "../screens/misTurnos/misTurnos.screen";

const Stack = createStackNavigator();

export default function MisTurnosStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MisTurnosScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MisTurnosScreen" component={MisTurnosScreen} />
    </Stack.Navigator>
  );
}
