import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Precio from "../screens/Precio/Precio.screen";

const Stack = createStackNavigator();

export default function PrecioStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PrecioScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PrecioScreen" component={Precio} />
    </Stack.Navigator>
  );
}
