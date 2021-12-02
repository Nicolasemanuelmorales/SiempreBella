import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigatorContent from "../components/DrawerContent/DrawerContent.components";
import Home from "./homeStackNavigator";
import Admin from "./adminStackNavigator";
import Precio from "./precioStackNavigator";
import Turnos from "./turnosStackNavigator";
import Disponibilidad from "./disponibilidadStackNavigator";
import Servicios from "./serviciosStackNavigator";
import MisTurnos from "./misTurnosStackNavigator";
import colors from "../../assets/colors";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: colors.BLANCO,
        headerStyle: { backgroundColor: colors.PRINCIPAL },
      }}
      drawerContent={(props) => <DrawerNavigatorContent {...props} />}
    >
      <Drawer.Screen name="Home" options={{ title: "HOME" }} component={Home} />
      <Drawer.Screen
        name="Servicios"
        options={{ title: "SERVICIOS" }}
        component={Servicios}
      />
      <Drawer.Screen
        name="MisTurnos"
        options={{ title: "MIS TURNOS" }}
        component={MisTurnos}
      />
      <Drawer.Screen
        name="Admin"
        options={{ title: "ADMIN" }}
        component={Admin}
      />
      <Drawer.Screen
        name="Precio"
        options={{ title: "PRECIOS" }}
        component={Precio}
      />
      <Drawer.Screen
        name="Turnos"
        options={{ title: "TURNOS" }}
        component={Turnos}
      />
      <Drawer.Screen
        name="Disponibilidad"
        options={{ title: "DISPONIBILIDAD" }}
        component={Disponibilidad}
      />
    </Drawer.Navigator>
  );
}
