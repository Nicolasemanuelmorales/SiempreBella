import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import ResetPassScreen from "../screens/resetPass/ResetPass.screen";
import colors from "../../assets/colors";

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ResetPassScreen"
      screenOptions={{
        title: "CAMBIAR CONTRASEÑA",
        headerShown: true,
        headerTintColor: colors.BLANCO,
        headerStyle: { backgroundColor: colors.PRINCIPAL },
      }}
    >
      <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />
    </Stack.Navigator>
  );
}
