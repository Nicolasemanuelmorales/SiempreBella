import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/Home.screen";
// import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
    </Stack.Navigator>
  );
}
