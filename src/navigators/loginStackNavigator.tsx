import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login/Login.screen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./DrawerNavigator";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden />
    </>
  );
}
