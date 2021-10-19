import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./DrawerContent.styles";

interface IProps {
  navigation: any;
}

function DrawerNavigatorContent({ navigation }: IProps) {
  return (
    <>
      <DrawerContentScrollView {...navigation}>
        <Drawer.Section>
          <View style={styles.headerDrawer}>
            <View style={styles.circulo}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../../assets/images/flor.png")}
              />
            </View>
            <View style={styles.headerTitulo}>
              <Text
                style={{ fontWeight: "bold", color: "#844aa8", fontSize: 20 }}
              >
                Siempre Bella
              </Text>
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Item
          label="Inicio"
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Home" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"home"}
              size={18}
              color={"#844aa8"}
            />
          )}
        />
        <Drawer.Item
          label="Servicios"
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Servicios" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"hands-helping"}
              size={18}
              color={"#844aa8"}
            />
          )}
        />
        <Drawer.Item
          label="Mis Turnos"
          onPress={() => {
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
              size={18}
              color={"#844aa8"}
            />
          )}
        />
        <Drawer.Item
          label="Cerrar Sesión"
          onPress={() => {
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
              size={18}
              color={"#844aa8"}
            />
          )}
        />
        <Drawer.Item
          label="Admin"
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Admin" }],
            });
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon
              style={styles.icon}
              name={"user-shield"}
              size={18}
              color={"orange"}
            />
          )}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerNavigatorContent;
