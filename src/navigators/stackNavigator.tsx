import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStackNavigator from "./loginStackNavigator";
import RegistrarStackNavigator from "./registrarStackNavigator";
import ResetPassStackNavigator from "./resetPassStackNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawerNavigator";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/rootReducer";
import Loader from "../components/Loader/Loader.components";

const Stack = createStackNavigator();

export default function stackNavigator() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };
  const loader = useSelector((state: IRootState) => state.loader.value);

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginStackNavigator} />
          <Stack.Screen name="Registrar" component={RegistrarStackNavigator} />
          <Stack.Screen name="ResetPass" component={ResetPassStackNavigator} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <Loader open={loader} />
    </>
  );
}
