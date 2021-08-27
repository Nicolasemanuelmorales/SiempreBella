import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Admin from "../screens/admin/admin.screen";

const Stack = createStackNavigator();

export default function MisTurnosStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AdminScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AdminScreen" component={Admin} />
    </Stack.Navigator>
  );
}
