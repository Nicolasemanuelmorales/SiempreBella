import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigatorContent from "../components/DrawerContent/DrawerContent.components";
import Home from "./homeStackNavigator";
import Admin from "./adminStackNavigator";
import Servicios from "./serviciosStackNavigator";
import MisTurnos from "./misTurnosStackNavigator";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerNavigatorContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Servicios" component={Servicios} />
      <Drawer.Screen name="MisTurnos" component={MisTurnos} />
      <Drawer.Screen name="Admin" component={Admin} />
    </Drawer.Navigator>
  );
}
