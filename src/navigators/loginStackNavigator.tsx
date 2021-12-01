import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login/Login.screen";
import RegistrarScreen from "../screens/registrar/Registrar.screen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/rootReducer";
import Loader from "../components/Loader/Loader.components";

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
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
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registrar" component={RegistrarScreen} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <Loader open={loader} />
    </>
  );
}
