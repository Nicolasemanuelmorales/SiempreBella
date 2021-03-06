import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrarScreen from "../screens/registrar/Registrar.screen";
import colors from "../../assets/colors";

const Stack = createStackNavigator();

export default function RegistrarStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="RegistrarScreen"
      screenOptions={{
        title: "REGISTRAR",
        headerShown: true,
        headerTintColor: colors.BLANCO,
        headerStyle: { backgroundColor: colors.PRINCIPAL },
      }}
    >
      <Stack.Screen name="RegistrarScreen" component={RegistrarScreen} />
    </Stack.Navigator>
  );
}
