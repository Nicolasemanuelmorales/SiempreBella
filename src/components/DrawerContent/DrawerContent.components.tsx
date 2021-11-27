import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./DrawerContent.styles";
import colors from "../../../assets/colors";

interface IProps {
  navigation: any;
}

function DrawerNavigatorContent({ navigation }: IProps) {
  return (
    <>
      <DrawerContentScrollView style={{ marginTop: -23 }} {...navigation}>
        <Drawer.Section style={styles.prin}>
          <View style={styles.headerDrawer}>
            <View
              style={styles.circulo}
              onTouchEnd={() => {
                navigation.reset({
                  routes: [{ name: "Home" }],
                });
              }}
            >
              <Image
                style={styles.img}
                source={require("../../../assets/images/flor.png")}
              />
            </View>
            <View style={styles.headerTitulo}>
              <Text style={styles.title}>Siempre Bella</Text>
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Item
          label={<Text style={styles.inactive}>Inicio</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Home" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"home"}
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Servicios</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Servicios" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"hands-helping"}
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Mis Turnos</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "MisTurnos" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"calendar-alt"}
              solid
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Turnos</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Admin" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"tools"}
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Disponibilidad</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Login" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"clock"}
              solid
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Precios</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Precio" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"hand-holding-usd"}
              solid
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Estadistica</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Login" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"chart-pie"}
              solid
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
        <Drawer.Item
          label={<Text style={styles.inactive}>Cerrar Sesión</Text>}
          onTouchEnd={() => {
            navigation.reset({
              routes: [{ name: "Login" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"sign-out-alt"}
              solid
              size={22}
              color={colors.PRINCIPAL}
            />
          )}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerNavigatorContent;
